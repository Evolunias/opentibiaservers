import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-highscores');
}

export default function RealMapRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-highscores" />;
}
