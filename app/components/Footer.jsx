'use client';

import Link from 'next/link';
import { Heart, Copy } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { translate } from '@/app/lib/translations';
import DiscordWidget from './DiscordWidget';
import './Footer.css';

const getCryptoOptions = (language) => [
  {
    name: translate('footer.solana', language),
    symbol: 'SOL',
    address: 'CbcWb97K3TEFJZJYLZRqdsMSdVXTFaMaUcF6yPQgY9yS',
    descriptionKey: 'footer.solana-desc'
  },
  {
    name: translate('footer.dogecoin', language),
    symbol: 'DOGE',
    address: 'DJungBB29tYgcuUXnXUpParVN9BTwKj4kH',
    descriptionKey: 'footer.dogecoin-desc'
  },
  {
    name: translate('footer.usdt', language),
    symbol: 'USDT (ERC-20)',
    address: '0xc530cfc3a9a4e57cb35183ea1f5436aa1f8fc73c',
    descriptionKey: 'footer.usdt-desc'
  },
  {
    name: translate('footer.ethereum', language),
    symbol: 'ETH',
    address: '0xc530cfc3a9a4e57cb35183ea1f5436aa1f8fc73c',
    descriptionKey: 'footer.ethereum-desc'
  }
];

export default function Footer() {
  const [copiedAddress, setCopiedAddress] = useState(null);
  const { language } = useLanguage();

  const handleCopyAddress = (address) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const cryptoNames = {
    solana: translate('footer.solana', language),
    dogecoin: translate('footer.dogecoin', language),
    usdt: translate('footer.usdt', language),
    ethereum: translate('footer.ethereum', language),
  };

  return (
    <footer className="global-footer">
      <div className="footer-container">
        {/* Main Content Section */}
        <div className="footer-content">
          <div className="footer-section footer-intro">
            <h3>{translate('footer.support', language)}</h3>
            <p>
              {translate('footer.support-description', language)}
            </p>
          </div>

          {/* Cryptocurrency Options */}
          <div className="footer-section footer-crypto">
            <h4>{translate('footer.accepted-payments', language)}</h4>
            <div className="crypto-grid">
              {getCryptoOptions(language).map((crypto) => (
                <div key={crypto.symbol} className="crypto-card">
                  <div className="crypto-header">
                    <span className="crypto-name">{crypto.name}</span>
                    <span className="crypto-symbol">{crypto.symbol}</span>
                  </div>
                  <p className="crypto-description">{translate(crypto.descriptionKey, language)}</p>
                  <div className="crypto-address-container">
                    <code className="crypto-address" title={crypto.address}>
                      {crypto.address}
                    </code>
                    <button
                      onClick={() => handleCopyAddress(crypto.address)}
                      className={`copy-button ${copiedAddress === crypto.address ? 'copied' : ''}`}
                      aria-label={`Copy ${crypto.symbol} address`}
                      title={`Copy full address`}
                    >
                      {copiedAddress === crypto.address ? (
                        <span>{translate('footer.copied', language)}</span>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>{translate('footer.copy', language)}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-section footer-links">
            <h4>{translate('footer.quick-links', language)}</h4>
            <nav className="footer-nav">
              <Link href="/">{translate('footer.home', language)}</Link>
              <Link href="/search">{translate('nav.search', language)}</Link>
              <a href="https://evolisca.com" target="_blank" rel="noreferrer">
                {translate('footer.official-game', language)}
              </a>
            </nav>
          </div>

          {/* Discord Community Widget */}
          <div className="footer-section footer-discord">
            <DiscordWidget variant="full" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-credit">
            <p>
              <Heart className="h-4 w-4" style={{ display: 'inline', marginRight: '4px' }} />
              {translate('footer.built-with-passion', language)}
            </p>
          </div>
          <div className="footer-meta">
            <p>{translate('footer.copyright', language).replace('{{year}}', new Date().getFullYear())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
