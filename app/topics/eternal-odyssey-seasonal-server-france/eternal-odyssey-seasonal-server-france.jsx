import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-seasonal-server-france');
}

export default function EternalOdysseySeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-seasonal-server-france" />;
}
