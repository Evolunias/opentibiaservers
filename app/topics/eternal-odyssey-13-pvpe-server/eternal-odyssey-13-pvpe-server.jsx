import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-13-pvpe-server');
}

export default function EternalOdyssey13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-13-pvpe-server" />;
}
