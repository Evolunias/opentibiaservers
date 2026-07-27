import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-ot');
}

export default function EternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-ot" />;
}
