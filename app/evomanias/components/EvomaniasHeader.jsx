'use client';

import Link from 'next/link';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';
import { useState } from 'react';

export default function EvomaniasHeader() {
  const { account } = useEvomaniasAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/evomanias" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
              ⚔️
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EVOMANIAS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/evomanias" className="px-4 py-2 text-gray-300 hover:text-purple-400 transition">
              Home
            </Link>
            <Link href="/evomanias/highscores" className="px-4 py-2 text-gray-300 hover:text-purple-400 transition">
              Highscores
            </Link>
            <a href="#characters" className="px-4 py-2 text-gray-300 hover:text-purple-400 transition">
              Characters
            </a>
            <a href="#community" className="px-4 py-2 text-gray-300 hover:text-purple-400 transition">
              Community
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {!account ? (
              <>
                <Link
                  href="/evomanias/login"
                  className="hidden sm:inline-block px-4 py-2 text-purple-400 hover:text-purple-300 transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/evomanias/register"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded hover:opacity-90 transition"
                >
                  Create Account
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/evomanias/account"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded hover:opacity-90 transition text-sm"
                >
                  My Account
                </Link>
                <div className="text-gray-400 text-sm hidden sm:block border-l border-gray-700 pl-3 ml-3">
                  {account.name}
                </div>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-purple-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-2">
            <Link href="/evomanias" className="block px-4 py-2 text-gray-300 hover:text-purple-400">
              Home
            </Link>
            <Link href="/evomanias/highscores" className="block px-4 py-2 text-gray-300 hover:text-purple-400">
              Highscores
            </Link>
            <a href="#characters" className="block px-4 py-2 text-gray-300 hover:text-purple-400">
              Characters
            </a>
            <a href="#community" className="block px-4 py-2 text-gray-300 hover:text-purple-400">
              Community
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
