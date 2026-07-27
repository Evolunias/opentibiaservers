import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-download');
}

export default function EternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-download" />;
}
