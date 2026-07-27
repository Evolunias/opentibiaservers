import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-highscores');
}

export default function RealMapLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-highscores" />;
}
