import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-poland-server');
}

export default function EternalOdysseyPolandServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-poland-server" />;
}
