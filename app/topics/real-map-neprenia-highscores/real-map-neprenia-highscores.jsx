import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-highscores');
}

export default function RealMapNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-highscores" />;
}
