import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-highscores');
}

export default function NewSeasonMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-highscores" />;
}
