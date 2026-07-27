import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-10-0-seasonal-server');
}

export default function EternalOdyssey100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-10-0-seasonal-server" />;
}
