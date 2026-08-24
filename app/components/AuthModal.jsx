'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/app/context/AuthContext';

export default function AuthModal({ open, mode = 'login', onClose, onSuccess }) {
  const { signIn, signUp } = useAuth();
  const [activeMode, setActiveMode] = useState(mode);
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    account_type: 'player',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (open) {
      setActiveMode(mode);
      setError('');
      setNotice('');
    }
  }, [mode, open]);

  if (!open) return null;

  const isRegister = activeMode === 'register';
  const isVerify = activeMode === 'verify';

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    const result = isRegister
      ? await signUp(form.email, form.password, form.username || form.email.split('@')[0], {
          account_type: form.account_type,
        })
      : await signIn(form.email, form.password);

    setSubmitting(false);

    if (!result.success) {
      setError(result.error || 'Authentication failed.');
      return;
    }

    if (isRegister) {
      setNotice(`We created the account for ${form.email}. Check that inbox for the Supabase verification email if email confirmation is enabled.`);
      setActiveMode('verify');
      onSuccess?.();
      setSubmitting(false);
      return;
    }

    onSuccess?.();
    onClose?.();
  };

  return (
    <div className="auth-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 px-4 py-6 backdrop-blur-sm">
      <button type="button" aria-label="Close auth dialog" className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="auth-modal relative w-full max-w-[500px] overflow-hidden rounded border border-gray-200 bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <div className="auth-modal__header border-b border-gray-200 bg-gray-950 px-5 py-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="auth-modal__logo">
                <Image
                  src="/images/server-logos/opentibiaservers-directory.png"
                  alt="OpenTibiaServers.com"
                  width={144}
                  height={100}
                  priority
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-300">Open Tibia Servers</p>
                <h2 id="auth-modal-title" className="text-xl font-bold text-white">
                  {isVerify ? 'Verify Email' : isRegister ? 'Create Account' : 'Sign In'}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="auth-modal__close rounded border border-white/15 px-3 py-2 text-sm font-bold text-gray-200 hover:bg-white hover:text-gray-950"
              aria-label="Close auth dialog"
            >
              X
            </button>
          </div>
          <div className="auth-modal__tabs grid grid-cols-2 gap-2 rounded border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => {
                setActiveMode('login');
                setError('');
                setNotice('');
              }}
              className={`rounded px-3 py-2 text-sm font-bold ${!isRegister && !isVerify ? 'bg-white text-gray-950' : 'text-gray-200 hover:bg-white/10'}`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode('register');
                setError('');
                setNotice('');
              }}
              className={`rounded px-3 py-2 text-sm font-bold ${isRegister || isVerify ? 'bg-white text-gray-950' : 'text-gray-200 hover:bg-white/10'}`}
            >
              Create account
            </button>
          </div>
        </div>

        {isVerify ? (
          <div className="px-5 py-5">
            <div className="rounded border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-bold text-green-950">Check your email</h3>
              <p className="mt-2 text-sm leading-7 text-green-900">
                {notice || `We sent the next step to ${form.email}. Verify the email address, then return here to sign in and manage reviews, claims, screenshots, and listings.`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveMode('login');
                setNotice('');
              }}
              className="mt-4 w-full rounded bg-gray-950 px-4 py-3 text-sm font-bold text-white hover:bg-gray-800"
            >
              Back to sign in
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="auth-modal__form space-y-4 px-5 py-5">
          <div>
            <p className="text-sm leading-6 text-gray-600">
              {isRegister
                ? 'Join as a player, server owner, or community manager without leaving the directory.'
                : 'Continue on this page and keep your current server research open.'}
            </p>
          </div>
          {error ? <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div> : null}

          {isRegister ? (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Username</label>
                <input
                  value={form.username}
                  onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
                  className="auth-modal__control w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Account Type</label>
                <select
                  value={form.account_type}
                  onChange={(event) => setForm((current) => ({ ...current, account_type: event.target.value }))}
                  className="auth-modal__control w-full rounded border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="player">Player</option>
                  <option value="server_owner">Server owner</option>
                  <option value="community_manager">Community manager</option>
                </select>
              </div>
            </>
          ) : null}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              className="auth-modal__control w-full rounded border border-gray-300 px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              className="auth-modal__control w-full rounded border border-gray-300 px-3 py-2 text-sm"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="auth-modal__primary w-full rounded bg-gray-950 px-4 py-3 text-sm font-bold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
          </button>

          <button
            type="button"
            onClick={() => {
              setError('');
              setNotice('');
              setActiveMode(isRegister ? 'login' : 'register');
            }}
            className="auth-modal__secondary w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50"
          >
            {isRegister ? 'Already have an account? Sign in' : 'Need an account? Register'}
          </button>
        </form>
        )}
      </div>
    </div>
  );
}
