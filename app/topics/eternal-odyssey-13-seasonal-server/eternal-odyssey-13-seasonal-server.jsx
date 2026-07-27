import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-13-seasonal-server');
}

export default function EternalOdyssey13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-13-seasonal-server" />;
}
