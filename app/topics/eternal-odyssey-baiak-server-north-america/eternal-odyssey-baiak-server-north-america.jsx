import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-baiak-server-north-america');
}

export default function EternalOdysseyBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-baiak-server-north-america" />;
}
