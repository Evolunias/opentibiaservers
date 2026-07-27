import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-highscores');
}

export default function RealMapInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-highscores" />;
}
