import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-highscores');
}

export default function CurrentEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-highscores" />;
}
