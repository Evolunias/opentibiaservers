import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-highscores');
}

export default function ActiveCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-highscores" />;
}
