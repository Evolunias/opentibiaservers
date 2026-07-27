import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-highscores');
}

export default function RealMapCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-highscores" />;
}
