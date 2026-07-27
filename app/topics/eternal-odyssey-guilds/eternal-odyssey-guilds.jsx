import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-guilds');
}

export default function EternalOdysseyGuildsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-guilds" />;
}
