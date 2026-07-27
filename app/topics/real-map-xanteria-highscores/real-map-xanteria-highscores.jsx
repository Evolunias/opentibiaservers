import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-highscores');
}

export default function RealMapXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-highscores" />;
}
