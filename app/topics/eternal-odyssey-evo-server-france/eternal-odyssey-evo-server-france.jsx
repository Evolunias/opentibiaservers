import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-france');
}

export default function EternalOdysseyEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-france" />;
}
