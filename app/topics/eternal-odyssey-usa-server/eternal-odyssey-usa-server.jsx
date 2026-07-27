import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-usa-server');
}

export default function EternalOdysseyUsaServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-usa-server" />;
}
