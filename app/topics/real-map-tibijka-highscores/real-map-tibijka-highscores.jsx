import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-highscores');
}

export default function RealMapTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-highscores" />;
}
