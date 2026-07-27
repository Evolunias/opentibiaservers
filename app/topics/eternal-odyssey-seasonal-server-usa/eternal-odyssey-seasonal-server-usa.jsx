import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-seasonal-server-usa');
}

export default function EternalOdysseySeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-seasonal-server-usa" />;
}
