import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-brazil');
}

export default function EternalOdysseyPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-brazil" />;
}
