import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-highscores');
}

export default function RealMapSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-highscores" />;
}
