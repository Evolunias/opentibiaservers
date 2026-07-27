import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-highscores');
}

export default function BestMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-highscores" />;
}
