import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-seasonal-server');
}

export default function EternalOdyssey15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-seasonal-server" />;
}
