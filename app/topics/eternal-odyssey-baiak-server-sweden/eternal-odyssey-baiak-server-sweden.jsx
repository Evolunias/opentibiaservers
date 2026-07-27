import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-baiak-server-sweden');
}

export default function EternalOdysseyBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-baiak-server-sweden" />;
}
