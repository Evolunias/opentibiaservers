import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-screenshots');
}

export default function EternalOdysseyScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-screenshots" />;
}
