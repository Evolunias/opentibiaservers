import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-guide');
}

export default function EternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-guide" />;
}
