import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-highscores');
}

export default function RealMapTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-highscores" />;
}
