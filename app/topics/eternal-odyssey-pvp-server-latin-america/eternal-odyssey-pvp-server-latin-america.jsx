import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-latin-america');
}

export default function EternalOdysseyPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-latin-america" />;
}
