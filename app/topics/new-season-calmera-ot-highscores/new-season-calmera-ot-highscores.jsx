import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-highscores');
}

export default function NewSeasonCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-highscores" />;
}
