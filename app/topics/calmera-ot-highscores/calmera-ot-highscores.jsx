import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-highscores');
}

export default function CalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-highscores" />;
}
