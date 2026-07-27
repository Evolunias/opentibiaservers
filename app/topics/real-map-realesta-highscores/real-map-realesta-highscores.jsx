import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-highscores');
}

export default function RealMapRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-highscores" />;
}
