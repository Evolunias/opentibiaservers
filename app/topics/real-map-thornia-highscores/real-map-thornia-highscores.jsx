import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-highscores');
}

export default function RealMapThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-highscores" />;
}
