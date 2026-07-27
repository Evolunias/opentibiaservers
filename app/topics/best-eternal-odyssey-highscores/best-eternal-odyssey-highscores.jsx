import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-highscores');
}

export default function BestEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-highscores" />;
}
