import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-highscores');
}

export default function RealMapMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-highscores" />;
}
