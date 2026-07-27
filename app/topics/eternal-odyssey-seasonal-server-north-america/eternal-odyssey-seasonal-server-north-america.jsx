import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-seasonal-server-north-america');
}

export default function EternalOdysseySeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-seasonal-server-north-america" />;
}
