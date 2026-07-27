import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-highscores');
}

export default function RealMapYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-highscores" />;
}
