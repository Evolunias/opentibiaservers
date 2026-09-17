'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const STORAGE_KEY = 'ots_email_capture_hide_until';
const SHOW_DELAY_MS = 3000;
const HIDE_MS = 24 * 60 * 60 * 1000;

function readHideUntil() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

function writeHideUntil(untilMs) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(untilMs));
  } catch {
    /* ignore */
  }
}

export default function EmailCaptureModal() {
  const titleId = useId();
  const descId = useId();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dontShow24h, setDontShow24h] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const sessionHiddenRef = useRef(false);
  const emailRef = useRef(null);
  const prevOverflowRef = useRef('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (readHideUntil() > Date.now()) return undefined;
    if (sessionHiddenRef.current) return undefined;

    const timer = window.setTimeout(() => {
      if (sessionHiddenRef.current) return;
      if (readHideUntil() > Date.now()) return;
      setOpen(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || typeof document === 'undefined') return undefined;

    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = window.setTimeout(() => emailRef.current?.focus(), 40);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflowRef.current || '';
    };
  }, [open]);

  const closeForSessionOnly = useCallback(() => {
    sessionHiddenRef.current = true;
    setOpen(false);
  }, []);

  const closeWith24hIfChecked = useCallback(() => {
    if (dontShow24h) writeHideUntil(Date.now() + HIDE_MS);
    sessionHiddenRef.current = true;
    setOpen(false);
  }, [dontShow24h]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (dontShow24h) closeWith24hIfChecked();
      else closeForSessionOnly();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dontShow24h, closeForSessionOnly, closeWith24hIfChecked]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          name: name.trim() || undefined,
          source: 'popup',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.success === false) {
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }
      writeHideUntil(Date.now() + HIDE_MS);
      setDone(true);
      window.setTimeout(() => {
        sessionHiddenRef.current = true;
        setOpen(false);
      }, 1200);
    } catch (err) {
      setError(err?.message || 'Subscription failed.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="email-capture-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (dontShow24h) closeWith24hIfChecked();
        else closeForSessionOnly();
      }}
    >
      <div
        className="email-capture-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <button
          type="button"
          className="email-capture-close"
          aria-label="Close"
          onClick={() => {
            if (dontShow24h) closeWith24hIfChecked();
            else closeForSessionOnly();
          }}
        >
          x
        </button>

        {done ? (
          <div className="email-capture-body">
            <h2 id={titleId} className="email-capture-title">
              You are on the list
            </h2>
            <p id={descId} className="email-capture-copy">
              Thanks — we will share OT server launches, ranking moves, and forum highlights. No spam.
            </p>
          </div>
        ) : (
          <form className="email-capture-body" onSubmit={onSubmit}>
            <p className="email-capture-kicker">OpenTibiaServers newsletter</p>
            <h2 id={titleId} className="email-capture-title">
              Stay ahead of new OT launches
            </h2>
            <p id={descId} className="email-capture-copy">
              Occasional updates on server launches, live rankings, and forum highlights. Unsubscribe anytime.
            </p>

            <label className="email-capture-label" htmlFor="email-capture-name">
              Name <span className="email-capture-optional">(optional)</span>
            </label>
            <input
              id="email-capture-name"
              className="email-capture-input"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />

            <label className="email-capture-label" htmlFor="email-capture-email">
              Email
            </label>
            <input
              id="email-capture-email"
              ref={emailRef}
              className="email-capture-input"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            {error ? (
              <p className="email-capture-error" role="alert">
                {error}
              </p>
            ) : null}

            <button type="submit" className="email-capture-submit" disabled={submitting}>
              {submitting ? 'Subscribing...' : 'Subscribe'}
            </button>

            <label className="email-capture-checkbox-row">
              <input
                type="checkbox"
                checked={dontShow24h}
                onChange={(e) => setDontShow24h(e.target.checked)}
              />
              <span>Do not show this again for 24 hours</span>
            </label>

            <button
              type="button"
              className="email-capture-dismiss"
              onClick={closeWith24hIfChecked}
              disabled={!dontShow24h}
              title={
                dontShow24h
                  ? 'Hide for 24 hours'
                  : 'Check the box above to hide for 24 hours'
              }
            >
              {dontShow24h ? 'Close for 24 hours' : 'Check the box to hide for 24h'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}