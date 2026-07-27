import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-highscores');
}

export default function PopularRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-highscores" />;
}
