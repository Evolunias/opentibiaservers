import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-client');
}

export default function EternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-client" />;
}
