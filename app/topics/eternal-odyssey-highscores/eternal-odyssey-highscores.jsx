import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-highscores');
}

export default function EternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-highscores" />;
}
