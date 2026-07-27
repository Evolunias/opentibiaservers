import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-highscores');
}

export default function RealMapEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-highscores" />;
}
