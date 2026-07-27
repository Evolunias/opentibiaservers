import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-9-6-pvpe-server');
}

export default function EternalOdyssey96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-9-6-pvpe-server" />;
}
