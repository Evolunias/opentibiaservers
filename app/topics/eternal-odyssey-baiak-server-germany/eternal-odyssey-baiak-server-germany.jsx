import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-baiak-server-germany');
}

export default function EternalOdysseyBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-baiak-server-germany" />;
}
