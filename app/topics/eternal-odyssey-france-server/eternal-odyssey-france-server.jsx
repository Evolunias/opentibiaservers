import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-france-server');
}

export default function EternalOdysseyFranceServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-france-server" />;
}
