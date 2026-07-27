import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-rules');
}

export default function EternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-rules" />;
}
