import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-wars');
}

export default function EternalOdysseyWarsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-wars" />;
}
