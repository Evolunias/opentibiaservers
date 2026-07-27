import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-poland-servers');
}

export default function EternalOdysseyPolandServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-poland-servers" />;
}
