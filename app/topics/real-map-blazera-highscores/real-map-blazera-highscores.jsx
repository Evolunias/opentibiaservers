import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-highscores');
}

export default function RealMapBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-highscores" />;
}
