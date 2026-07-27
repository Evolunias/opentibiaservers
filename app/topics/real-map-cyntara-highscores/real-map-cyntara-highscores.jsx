import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-highscores');
}

export default function RealMapCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-highscores" />;
}
