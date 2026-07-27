import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-highscores');
}

export default function BestTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-highscores" />;
}
