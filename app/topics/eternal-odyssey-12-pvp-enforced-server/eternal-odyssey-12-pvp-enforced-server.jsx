import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-pvp-enforced-server');
}

export default function EternalOdyssey12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-pvp-enforced-server" />;
}
