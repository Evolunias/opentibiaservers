import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-wiki');
}

export default function EternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-wiki" />;
}
