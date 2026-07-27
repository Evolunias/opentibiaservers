import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-germany');
}

export default function EternalOdysseyPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-germany" />;
}
