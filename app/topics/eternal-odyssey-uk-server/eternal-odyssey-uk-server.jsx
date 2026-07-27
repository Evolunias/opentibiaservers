import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-uk-server');
}

export default function EternalOdysseyUkServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-uk-server" />;
}
