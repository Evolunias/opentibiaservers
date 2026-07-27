import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-baiak-server-latin-america');
}

export default function EternalOdysseyBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-baiak-server-latin-america" />;
}
