import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-highscores');
}

export default function NewSeasonTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-highscores" />;
}
