import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-custom-map-servers');
}

export default function EternalOdyssey15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-custom-map-servers" />;
}
