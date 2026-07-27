import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-alternatives');
}

export default function EternalOdysseyAlternativesKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-alternatives" />;
}
