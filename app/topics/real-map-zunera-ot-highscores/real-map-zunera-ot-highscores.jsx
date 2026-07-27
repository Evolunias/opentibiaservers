import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-highscores');
}

export default function RealMapZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-highscores" />;
}
