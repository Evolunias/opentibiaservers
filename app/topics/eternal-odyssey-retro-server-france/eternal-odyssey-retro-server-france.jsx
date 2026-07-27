import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-france');
}

export default function EternalOdysseyRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-france" />;
}
