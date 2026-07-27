import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-highscores');
}

export default function RealMapVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-highscores" />;
}
