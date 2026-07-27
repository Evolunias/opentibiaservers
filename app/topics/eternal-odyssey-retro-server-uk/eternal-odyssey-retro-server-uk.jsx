import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-uk');
}

export default function EternalOdysseyRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-uk" />;
}
