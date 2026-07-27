import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-highscores');
}

export default function RealMapTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-highscores" />;
}
