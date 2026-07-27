import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-argentina-servers');
}

export default function EternalOdysseyArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-argentina-servers" />;
}
