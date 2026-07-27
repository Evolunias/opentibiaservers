import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-highscores');
}

export default function NewSeasonTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-highscores" />;
}
