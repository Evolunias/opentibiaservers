import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-highscores');
}

export default function PopularTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-highscores" />;
}
