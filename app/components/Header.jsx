'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import AuthModal from '@/app/components/AuthModal';

export default function Header() {
  const { user, loading } = useAuth();
  const [authMode, setAuthMode] = useState('login');
  const [authOpen, setAuthOpen] = useState(false);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded flex items-center justify-center font-bold text-gray-900 text-sm">
                OTS
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-950 m-0">Open Tibia Servers</h1>
                <p className="text-xs text-gray-500 m-0">Searchable Open Tibia server listings and source data.</p>
              </div>
            </Link>

            {!loading ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/community"
                  className="px-4 py-2 text-gray-900 font-semibold text-sm rounded hover:bg-gray-50"
                >
                  Community
                </Link>
                {user ? (
                  <>
                    <Link
                      href="/submit-server"
                      className="px-4 py-2 bg-gray-950 text-white font-semibold text-sm rounded hover:opacity-85"
                    >
                      Submit
                    </Link>
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 bg-white text-gray-900 font-semibold text-sm border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => openAuth('login')}
                      className="px-4 py-2 text-gray-900 font-semibold text-sm rounded hover:bg-gray-50"
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      onClick={() => openAuth('register')}
                      className="px-4 py-2 bg-gray-950 text-white font-semibold text-sm rounded hover:opacity-85"
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
      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} />
    </>
  );
}
