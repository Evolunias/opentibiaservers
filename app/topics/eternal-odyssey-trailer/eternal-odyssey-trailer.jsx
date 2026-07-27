import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-trailer');
}

export default function EternalOdysseyTrailerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-trailer" />;
}
