import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-seasonal-server-sweden');
}

export default function EternalOdysseySeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-seasonal-server-sweden" />;
}
