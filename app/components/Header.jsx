'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import AuthModal from '@/app/components/AuthModal';
import LanguageSelector from '@/app/components/LanguageSelector';
import ThemeSelector from '@/app/components/ThemeSelector';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const showAureraLogo = pathname === '/servers/aurera-global' || pathname === '/listings';
  const [authMode, setAuthMode] = useState('login');
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('auth');
    if (mode === 'login' || mode === 'register') {
      setAuthMode(mode);
      setAuthOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleOpenAuth = (event) => {
      const mode = event.detail?.mode === 'register' ? 'register' : 'login';
      setAuthMode(mode);
      setAuthOpen(true);
    };

    window.addEventListener('ots:open-auth', handleOpenAuth);
    return () => window.removeEventListener('ots:open-auth', handleOpenAuth);
  }, []);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const closeAuth = () => {
    setAuthOpen(false);
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (url.searchParams.has('auth')) {
      url.searchParams.delete('auth');
      router.replace(`${url.pathname}${url.search}${url.hash}`, { scroll: false });
    }
  };

  const authSuccess = () => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect && redirect.startsWith('/')) {
      router.push(redirect);
    }
  };

  return (
    <>
      <header className="site-header site-header--enterprise sticky top-0 z-50">
        <div className="w-full px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <Link href="/" className="brand-mark group flex shrink-0 items-center gap-3 hover:no-underline">
              {showAureraLogo ? (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1d2cd06444d64f5aae6a6cb23ba0be77%2F3d9fb8fdaec4431b851211fbec4d4616?format=webp&width=800&height=1200"
                  alt="Aurera Global"
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <>
                  <div className="brand-mark__sigil w-10 h-10 rounded flex items-center justify-center font-bold text-sm">
                    OTS
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-slate-900 m-0">OpenTibiaServers.com</span>
                    <p className="text-xs text-slate-500 m-0">Ranked OT listings, reviews, votes, and server data.</p>
                  </div>
                </>
              )}
            </Link>

            {!loading ? (
              <div className="flex flex-wrap items-center gap-2 xl:flex-nowrap">
                <Link
                  href="/knowledge"
                  className="nav-chip"
                >
                  Knowledge
                </Link>
          <Link
            href="/resources"
            className="nav-chip"
          >
            Resources
          </Link>
                <Link
                  href="/rankings"
                  className="nav-chip"
                >
                  Rankings
                </Link>
          <Link href="/wiki" className="nav-chip">Wiki</Link>
          <Link href="/research" className="nav-chip">Research</Link>
                <ThemeSelector />
                <LanguageSelector />
                {user ? (
                  <>
                    <Link
                      href="/submit-server"
                      className="btn-primary"
                    >
                      Submit
                    </Link>
                    <Link
                      href="/dashboard"
                      className="btn-ghost"
                    >
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => openAuth('login')}
                      className="auth-btn auth-btn--signin"
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      onClick={() => openAuth('register')}
                      className="auth-btn auth-btn--register"
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </header>
      <AuthModal open={authOpen} mode={authMode} onClose={closeAuth} onSuccess={authSuccess} />
    </>
  );
}

