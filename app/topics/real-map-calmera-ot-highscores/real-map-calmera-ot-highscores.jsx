import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-highscores');
}

export default function RealMapCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-highscores" />;
}
