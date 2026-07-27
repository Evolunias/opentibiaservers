import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-north-america');
}

export default function EternalOdysseyEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-north-america" />;
}
