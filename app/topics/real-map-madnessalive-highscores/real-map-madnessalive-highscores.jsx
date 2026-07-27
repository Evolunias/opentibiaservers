import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-highscores');
}

export default function RealMapMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-highscores" />;
}
