import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-latin-america');
}

export default function EternalOdysseyEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-latin-america" />;
}
