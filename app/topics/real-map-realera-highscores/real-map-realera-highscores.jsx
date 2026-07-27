import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-highscores');
}

export default function RealMapRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-highscores" />;
}
