import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-highscores');
}

export default function RealMapMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-highscores" />;
}
