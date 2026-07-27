import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-highscores');
}

export default function OfficialCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-highscores" />;
}
