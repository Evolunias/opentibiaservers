import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-france');
}

export default function EternalOdysseyPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-france" />;
}
