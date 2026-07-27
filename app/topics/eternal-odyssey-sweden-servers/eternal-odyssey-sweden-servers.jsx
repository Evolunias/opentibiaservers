import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-sweden-servers');
}

export default function EternalOdysseySwedenServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-sweden-servers" />;
}
