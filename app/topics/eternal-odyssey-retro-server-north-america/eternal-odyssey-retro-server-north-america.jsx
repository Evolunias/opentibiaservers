import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-north-america');
}

export default function EternalOdysseyRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-north-america" />;
}
