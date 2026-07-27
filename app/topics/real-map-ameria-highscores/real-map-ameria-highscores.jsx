import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-highscores');
}

export default function RealMapAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-highscores" />;
}
