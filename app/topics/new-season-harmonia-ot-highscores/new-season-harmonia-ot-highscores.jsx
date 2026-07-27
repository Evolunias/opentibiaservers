import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-highscores');
}

export default function NewSeasonHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-highscores" />;
}
