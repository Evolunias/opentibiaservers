import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-highscores');
}

export default function RealMapOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-highscores" />;
}
