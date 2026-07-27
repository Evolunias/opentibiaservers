import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-poland');
}

export default function EternalOdysseyPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-poland" />;
}
