'use client';

import { useState } from 'react';
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

  if (!open) return null;

  const isRegister = activeMode === 'register';

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

    onSuccess?.();
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/70 px-4 py-6">
      <div className="w-full max-w-md rounded border border-gray-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-gray-950">{isRegister ? 'Create Account' : 'Sign In'}</h2>
            <p className="mt-1 text-sm text-gray-600">
              {isRegister ? 'Join as a player or server owner.' : 'Continue without leaving this page.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded px-3 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-950"
            aria-label="Close auth dialog"
          >
            X
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4 px-5 py-5">
          {error ? <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div> : null}

          {isRegister ? (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Username</label>
                <input
                  value={form.username}
                  onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Account Type</label>
                <select
                  value={form.account_type}
                  onChange={(event) => setForm((current) => ({ ...current, account_type: event.target.value }))}
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
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
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded bg-gray-950 px-4 py-3 text-sm font-bold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
          </button>

          <button
            type="button"
            onClick={() => {
              setError('');
              setActiveMode(isRegister ? 'login' : 'register');
            }}
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50"
          >
            {isRegister ? 'Already have an account? Sign in' : 'Need an account? Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
