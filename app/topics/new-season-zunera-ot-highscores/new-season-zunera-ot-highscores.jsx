import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-highscores');
}

export default function NewSeasonZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-highscores" />;
}
