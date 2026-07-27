import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-highscores');
}

export default function RealMapTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-highscores" />;
}
