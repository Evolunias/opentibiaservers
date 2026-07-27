import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-highscores');
}

export default function RealMapTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-highscores" />;
}
