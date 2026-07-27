import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-poland');
}

export default function EternalOdysseyEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-poland" />;
}
