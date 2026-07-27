import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-highscores');
}

export default function RealMapDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-highscores" />;
}
