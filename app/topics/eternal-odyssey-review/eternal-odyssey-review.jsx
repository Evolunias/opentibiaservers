import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-review');
}

export default function EternalOdysseyReviewKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-review" />;
}
