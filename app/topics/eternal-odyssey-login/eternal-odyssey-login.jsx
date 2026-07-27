import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-login');
}

export default function EternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-login" />;
}
