import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-argentina');
}

export default function EternalOdysseyNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-argentina" />;
}
