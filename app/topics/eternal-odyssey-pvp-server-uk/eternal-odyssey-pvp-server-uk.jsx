import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-uk');
}

export default function EternalOdysseyPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-uk" />;
}
