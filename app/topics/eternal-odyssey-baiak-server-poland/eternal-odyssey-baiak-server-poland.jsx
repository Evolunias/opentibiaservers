import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-baiak-server-poland');
}

export default function EternalOdysseyBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-baiak-server-poland" />;
}
