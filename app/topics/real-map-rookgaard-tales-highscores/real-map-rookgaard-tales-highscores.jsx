import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-highscores');
}

export default function RealMapRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-highscores" />;
}
