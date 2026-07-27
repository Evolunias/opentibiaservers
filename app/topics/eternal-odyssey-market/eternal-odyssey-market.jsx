import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-market');
}

export default function EternalOdysseyMarketKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-market" />;
}
