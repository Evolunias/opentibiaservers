import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-france-servers');
}

export default function EternalOdysseyFranceServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-france-servers" />;
}
