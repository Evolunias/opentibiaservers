import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-highscores');
}

export default function RealMapEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-highscores" />;
}
