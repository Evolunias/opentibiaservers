import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-brazil-servers');
}

export default function EternalOdysseyBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-brazil-servers" />;
}
