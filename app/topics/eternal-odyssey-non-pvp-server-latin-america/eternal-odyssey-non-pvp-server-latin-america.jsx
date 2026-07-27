import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-latin-america');
}

export default function EternalOdysseyNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-latin-america" />;
}
