import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-argentina');
}

export default function EternalOdysseyPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-argentina" />;
}
