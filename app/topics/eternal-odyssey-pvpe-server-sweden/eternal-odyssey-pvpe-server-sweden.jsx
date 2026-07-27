import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-sweden');
}

export default function EternalOdysseyPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-sweden" />;
}
