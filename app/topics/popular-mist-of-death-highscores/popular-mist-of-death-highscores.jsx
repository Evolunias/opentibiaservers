import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-highscores');
}

export default function PopularMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-highscores" />;
}
