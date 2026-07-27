import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-discord');
}

export default function EternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-discord" />;
}
