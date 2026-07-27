import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-highscores');
}

export default function RealMapUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-highscores" />;
}
