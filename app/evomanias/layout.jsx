'use client';

import { EvomaniasAuthProvider } from '../context/EvomaniasAuthContext';
import EvomaniasHeader from './components/EvomaniasHeader';
import EvomaniasFooter from './components/EvomaniasFooter';

export default function EvomaniasLayout({ children }) {
  return (
    <EvomaniasAuthProvider>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col">
        <EvomaniasHeader />
        <main className="flex-1">
          {children}
        </main>
        <EvomaniasFooter />
      </div>
    </EvomaniasAuthProvider>
  );
}
