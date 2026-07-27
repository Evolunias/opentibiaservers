import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-mexico-server');
}

export default function EternalOdysseyMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-mexico-server" />;
}
