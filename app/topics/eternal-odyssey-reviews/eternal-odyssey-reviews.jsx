import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-reviews');
}

export default function EternalOdysseyReviewsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-reviews" />;
}
