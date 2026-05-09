'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function Header() {
  const { user, loading } = useAuth();

  return (
    <header className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center font-bold text-xl">⚔️</div>
            <h1 className="text-2xl font-bold text-gray-900">Open Tibia Servers</h1>
          </Link>

          <div className="flex items-center gap-4">
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-3">
                    <Link
                      href="/submit-server"
                      className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
                    >
                      Submit Server
                    </Link>
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 bg-gray-700 text-white font-medium rounded hover:bg-gray-800"
                    >
                      Dashboard
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link
                      href="/auth/login"
                      className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-sm">Browse and compare open Tibia servers with comprehensive stats and details</p>
      </div>
    </header>
  );
}
