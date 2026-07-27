import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-usa');
}

export default function EternalOdysseyEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-usa" />;
}
