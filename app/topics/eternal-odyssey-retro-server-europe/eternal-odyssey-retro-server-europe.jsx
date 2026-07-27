import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-europe');
}

export default function EternalOdysseyRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-europe" />;
}
