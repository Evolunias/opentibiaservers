'use client';

import { useEffect, useState } from 'react';

const EVOMANIAS_URL = 'https://evomanias.com/';
const DOWNLOADS_URL = 'https://evomanias.com/downloads';
const DISCORD_URL = 'https://discord.gg/wj4D48Jj5W';

const placementMeta = {
  top: {
    eyebrow: 'Featured Server',
    title: 'Evomanias',
  },
  inline: {
    eyebrow: 'Recommended To Play',
    title: 'Evomanias',
  },
  footer: {
    eyebrow: 'Featured Partner',
    title: 'Evomanias',
  },
};

const slides = [
  {
    id: 'plus',
    label: 'Plus Plan',
    headline: 'Plus Plan $200/year',
    detail: 'Was $360 — save $160 on the annual plan.',
    chip: 'Save $160',
    cta: { kind: 'link', label: 'View Offer', href: EVOMANIAS_URL },
  },
  {
    id: 'points',
    label: 'Starter Offer',
    headline: '500 Free Donation Points',
    detail: 'Claim your starter points when you create an account.',
    chip: '500 Free Points',
    cta: { kind: 'register', label: 'Create Account' },
  },
  {
    id: 'discord',
    label: 'Discord Perk',
    headline: 'Free Store Backpack',
    detail: 'Join the official Discord and grab the free backpack.',
    chip: 'Discord Backpack',
    cta: { kind: 'link', label: 'Join Discord', href: DISCORD_URL },
  },
  {
    id: 'download',
    label: 'Access',
    headline: 'Free To Play + Free Download',
    detail: 'Download the client and jump into the core world for free.',
    chip: 'Free Download',
    cta: { kind: 'link', label: 'Free Download', href: DOWNLOADS_URL },
  },
];

const ROTATE_MS = 4200;

function openRegisterModal() {
  window.dispatchEvent(new CustomEvent('ots:open-auth', { detail: { mode: 'register' } }));
}

export default function FeaturedServerAd({ placement = 'inline' }) {
  const meta = placementMeta[placement] || placementMeta.inline;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return undefined;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className={`featured-server-ad featured-server-ad--${placement}`}
      aria-label="Featured Evomanias server promotion"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="featured-server-ad__inner">
        <div className="featured-server-ad__copy">
          <p className="featured-server-ad__eyebrow">{meta.eyebrow}</p>
          <h2>{meta.title}</h2>

          <div className="featured-server-ad__rotator" aria-live="polite">
            <div key={slide.id} className="featured-server-ad__slide">
              <span className="featured-server-ad__chip">{slide.chip}</span>
              <p className="featured-server-ad__slide-label">{slide.label}</p>
              <p className="featured-server-ad__slide-headline">{slide.headline}</p>
              <p className="featured-server-ad__slide-detail">{slide.detail}</p>
            </div>
          </div>

          <div className="featured-server-ad__dots" role="tablist" aria-label="Offer slides">
            {slides.map((item, slideIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Show ${item.headline}`}
                className={`featured-server-ad__dot${slideIndex === index ? ' is-active' : ''}`}
                onClick={() => setIndex(slideIndex)}
              />
            ))}
          </div>
        </div>

        <div className="featured-server-ad__actions">
          <a href={EVOMANIAS_URL} target="_blank" rel="noopener noreferrer" className="featured-server-ad__primary">
            Play Evomanias
          </a>
          {slide.cta.kind === 'register' ? (
            <button type="button" onClick={openRegisterModal} className="featured-server-ad__secondary">
              {slide.cta.label}
            </button>
          ) : (
            <a href={slide.cta.href} target="_blank" rel="noopener noreferrer" className="featured-server-ad__secondary">
              {slide.cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
