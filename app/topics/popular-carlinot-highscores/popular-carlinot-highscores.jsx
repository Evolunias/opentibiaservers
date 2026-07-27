import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-highscores');
}

export default function PopularCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-highscores" />;
}
