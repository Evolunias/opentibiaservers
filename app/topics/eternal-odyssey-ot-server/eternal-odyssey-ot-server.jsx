import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-ot-server');
}

export default function EternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-ot-server" />;
}
