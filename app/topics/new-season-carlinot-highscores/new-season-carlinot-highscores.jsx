import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-highscores');
}

export default function NewSeasonCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-highscores" />;
}
