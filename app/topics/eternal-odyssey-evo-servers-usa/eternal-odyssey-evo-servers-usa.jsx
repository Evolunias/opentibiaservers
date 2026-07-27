import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-evo-servers-usa');
}

export default function EternalOdysseyEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-evo-servers-usa" />;
}
