import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-14-pvp-enforced-server');
}

export default function EternalOdyssey14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-14-pvp-enforced-server" />;
}
