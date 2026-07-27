import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-private-server');
}

export default function EternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-private-server" />;
}
