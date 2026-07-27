import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-highscores');
}

export default function NewSeasonImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-highscores" />;
}
