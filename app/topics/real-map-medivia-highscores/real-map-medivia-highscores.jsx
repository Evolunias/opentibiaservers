import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-highscores');
}

export default function RealMapMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-highscores" />;
}
