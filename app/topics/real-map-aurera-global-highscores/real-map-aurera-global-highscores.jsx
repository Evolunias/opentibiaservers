import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-highscores');
}

export default function RealMapAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-highscores" />;
}
