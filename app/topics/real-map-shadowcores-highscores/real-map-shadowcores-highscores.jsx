import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-highscores');
}

export default function RealMapShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-highscores" />;
}
