import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-highscores');
}

export default function BestCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-highscores" />;
}
