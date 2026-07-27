import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-high-exp');
}

export default function EternalOdysseyHighExpKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-high-exp" />;
}
