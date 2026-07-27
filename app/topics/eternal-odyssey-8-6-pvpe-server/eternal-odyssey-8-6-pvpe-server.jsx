import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-6-pvpe-server');
}

export default function EternalOdyssey86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-6-pvpe-server" />;
}
