import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-reset');
}

export default function EternalOdysseyResetKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-reset" />;
}
