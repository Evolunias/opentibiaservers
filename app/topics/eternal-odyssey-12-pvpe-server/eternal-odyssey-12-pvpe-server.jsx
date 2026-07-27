import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-pvpe-server');
}

export default function EternalOdyssey12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-pvpe-server" />;
}
