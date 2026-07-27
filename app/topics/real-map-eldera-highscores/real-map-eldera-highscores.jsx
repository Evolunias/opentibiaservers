import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-highscores');
}

export default function RealMapElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-highscores" />;
}
