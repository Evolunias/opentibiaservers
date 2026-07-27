import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-training');
}

export default function EternalOdysseyTrainingKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-training" />;
}
