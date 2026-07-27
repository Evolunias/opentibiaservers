import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-commands');
}

export default function EternalOdysseyCommandsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-commands" />;
}
