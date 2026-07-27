import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-official');
}

export default function EternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-official" />;
}
