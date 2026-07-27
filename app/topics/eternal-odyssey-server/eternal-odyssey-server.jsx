import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-server');
}

export default function EternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-server" />;
}
