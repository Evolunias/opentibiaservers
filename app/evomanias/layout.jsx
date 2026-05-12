'use client';

import { EvomaniasAuthProvider } from '../context/EvomaniasAuthContext';
import EvomaniasHeader from './components/EvomaniasHeader';
import EvomaniasFooter from './components/EvomaniasFooter';
import './evomanias.css';

export default function EvomaniasLayout({ children }) {
  return (
    <EvomaniasAuthProvider>
      <div className="min-h-screen text-white flex flex-col" style={{ background: 'linear-gradient(135deg, #050508 0%, #0a0a0f 50%, #0f0f15 100%)' }}>
        <EvomaniasHeader />
        <main className="flex-1">
          {children}
        </main>
        <EvomaniasFooter />
      </div>
    </EvomaniasAuthProvider>
  );
}
