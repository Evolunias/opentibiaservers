import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-highscores');
}

export default function RealMapNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-highscores" />;
}
