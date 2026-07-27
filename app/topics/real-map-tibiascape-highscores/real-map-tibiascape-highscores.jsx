import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-highscores');
}

export default function RealMapTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-highscores" />;
}
