import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-highscores');
}

export default function RealMapCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-highscores" />;
}
