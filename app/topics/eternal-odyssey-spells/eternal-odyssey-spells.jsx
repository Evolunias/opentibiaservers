import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-spells');
}

export default function EternalOdysseySpellsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-spells" />;
}
