import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-ots');
}

export default function EternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-ots" />;
}
