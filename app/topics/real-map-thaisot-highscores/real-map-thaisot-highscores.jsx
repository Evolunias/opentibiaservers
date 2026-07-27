import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-highscores');
}

export default function RealMapThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-highscores" />;
}
