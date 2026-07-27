import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-latin-america');
}

export default function EternalOdysseyRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-latin-america" />;
}
