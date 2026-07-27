import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-highscores');
}

export default function RealMapClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-highscores" />;
}
