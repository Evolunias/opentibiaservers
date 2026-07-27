import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-highscores');
}

export default function RealMapKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-highscores" />;
}
