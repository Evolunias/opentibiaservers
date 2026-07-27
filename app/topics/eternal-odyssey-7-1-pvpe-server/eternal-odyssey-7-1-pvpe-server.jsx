import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-7-1-pvpe-server');
}

export default function EternalOdyssey71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-7-1-pvpe-server" />;
}
