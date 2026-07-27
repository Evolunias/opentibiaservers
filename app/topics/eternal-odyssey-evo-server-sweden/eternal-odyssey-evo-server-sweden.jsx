import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-server-sweden');
}

export default function EternalOdysseyEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-server-sweden" />;
}
