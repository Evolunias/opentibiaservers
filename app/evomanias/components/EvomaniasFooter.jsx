'use client';

import Link from 'next/link';

export default function EvomaniasFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              EVOMANIAS
            </h3>
            <p className="text-gray-400 text-sm">
              Experience the ultimate Tibia adventure. Create your account, join thousands of players, and embark on an epic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/evomanias" className="text-gray-400 hover:text-purple-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/evomanias/register" className="text-gray-400 hover:text-purple-400 transition">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/evomanias/highscores" className="text-gray-400 hover:text-purple-400 transition">
                  Highscores
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Download Client
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Server Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} EVOMANIAS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition">
              Discord
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
