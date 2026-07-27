import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-highscores');
}

export default function NewSeasonTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-highscores" />;
}
