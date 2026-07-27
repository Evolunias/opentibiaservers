import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-11-pvpe-server');
}

export default function EternalOdyssey11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-11-pvpe-server" />;
}
