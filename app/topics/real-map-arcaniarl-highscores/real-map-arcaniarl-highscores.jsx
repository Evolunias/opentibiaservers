import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-highscores');
}

export default function RealMapArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-highscores" />;
}
