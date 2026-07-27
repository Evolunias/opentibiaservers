import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-highscores');
}

export default function CustomCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-highscores" />;
}
