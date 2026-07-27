import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-europe');
}

export default function EternalOdysseyPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-europe" />;
}
