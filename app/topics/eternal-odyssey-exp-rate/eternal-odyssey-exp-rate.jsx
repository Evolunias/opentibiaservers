import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-exp-rate');
}

export default function EternalOdysseyExpRateKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-exp-rate" />;
}
