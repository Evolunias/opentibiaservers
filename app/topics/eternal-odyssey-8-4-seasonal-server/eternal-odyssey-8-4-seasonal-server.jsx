import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-4-seasonal-server');
}

export default function EternalOdyssey84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-4-seasonal-server" />;
}
