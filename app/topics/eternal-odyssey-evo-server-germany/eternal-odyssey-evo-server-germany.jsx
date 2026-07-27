import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-germany');
}

export default function EternalOdysseyEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-germany" />;
}
