import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-highscores');
}

export default function TopTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-highscores" />;
}
