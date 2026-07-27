import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-highscores');
}

export default function RealMapCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-highscores" />;
}
