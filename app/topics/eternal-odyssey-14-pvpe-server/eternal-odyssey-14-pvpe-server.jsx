import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-14-pvpe-server');
}

export default function EternalOdyssey14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-14-pvpe-server" />;
}
