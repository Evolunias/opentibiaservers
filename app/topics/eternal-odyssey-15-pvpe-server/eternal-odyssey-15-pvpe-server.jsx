import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-pvpe-server');
}

export default function EternalOdyssey15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-pvpe-server" />;
}
