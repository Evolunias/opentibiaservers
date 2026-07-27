import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-highscores');
}

export default function RealMapClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-highscores" />;
}
