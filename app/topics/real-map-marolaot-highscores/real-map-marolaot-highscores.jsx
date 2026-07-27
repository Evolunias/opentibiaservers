import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-highscores');
}

export default function RealMapMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-highscores" />;
}
