import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey');
}

export default function EternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey" />;
}
