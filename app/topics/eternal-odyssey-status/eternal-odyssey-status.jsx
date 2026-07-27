import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-status');
}

export default function EternalOdysseyStatusKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-status" />;
}
