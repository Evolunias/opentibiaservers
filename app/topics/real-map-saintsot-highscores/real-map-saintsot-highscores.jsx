import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-highscores');
}

export default function RealMapSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-highscores" />;
}
