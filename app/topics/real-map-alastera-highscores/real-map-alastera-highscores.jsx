import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-highscores');
}

export default function RealMapAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-highscores" />;
}
