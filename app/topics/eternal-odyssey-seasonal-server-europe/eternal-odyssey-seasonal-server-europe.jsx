import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-seasonal-server-europe');
}

export default function EternalOdysseySeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-seasonal-server-europe" />;
}
