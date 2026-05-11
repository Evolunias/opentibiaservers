'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function EvomaniasHome() {
  const { user } = useAuth();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12 text-white shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Evomanias</h1>
          <p className="text-xl mb-8 opacity-90">Experience the ultimate Tibia adventure. Create your account, join thousands of players, and embark on an epic journey.</p>
          
          <div className="flex gap-4">
            {!user ? (
              <>
                <Link href="/evomanias/register" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Create Account
                </Link>
                <Link href="/evomanias/login" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <Link href="/evomanias/account" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  My Account
                </Link>
                <Link href="/evomanias/highscores" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Highscores
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Epic Adventure</h3>
          <p className="text-gray-600">Explore vast dungeons, face dangerous creatures, and discover treasures beyond imagination.</p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
          <p className="text-gray-600">Join a vibrant community of players. Form guilds, engage in PvP, and make lasting friendships.</p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Balanced Economy</h3>
          <p className="text-gray-600">Experience fair gameplay with balanced rates and custom content tailored for the best experience.</p>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">👤</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Create Account</h3>
              <p className="text-blue-800">Sign up now to create your character and begin your journey in Evomanias.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">💾</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Download Client</h3>
              <p className="text-blue-800">Download the game client and start playing with our optimized custom Tibia experience.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Check Highscores</h3>
              <p className="text-blue-800">View the leaderboards and see where you stand among the top players.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">👥</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Join Community</h3>
              <p className="text-blue-800">Connect with other players on Discord and participate in server events.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Server Stats */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Server Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <p className="text-4xl font-bold text-purple-600 mb-2">500+</p>
            <p className="text-gray-600 font-semibold">Active Players</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <p className="text-4xl font-bold text-blue-600 mb-2">10k+</p>
            <p className="text-gray-600 font-semibold">Characters Created</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <p className="text-4xl font-bold text-green-600 mb-2">99.9%</p>
            <p className="text-gray-600 font-semibold">Uptime</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <p className="text-4xl font-bold text-amber-600 mb-2">1.0x</p>
            <p className="text-gray-600 font-semibold">Experience Rate</p>
          </div>
        </div>
      </div>
    </main>
  );
}
