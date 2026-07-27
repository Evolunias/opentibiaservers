import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-usa-servers');
}

export default function EternalOdysseyUsaServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-usa-servers" />;
}
