import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-highscores');
}

export default function FreshStartEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-highscores" />;
}
