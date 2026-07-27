import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-highscores');
}

export default function RealMapOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-highscores" />;
}
