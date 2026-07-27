import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-seasonal-server-germany');
}

export default function EternalOdysseySeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-seasonal-server-germany" />;
}
