import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-season');
}

export default function EternalOdysseySeasonKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-season" />;
}
