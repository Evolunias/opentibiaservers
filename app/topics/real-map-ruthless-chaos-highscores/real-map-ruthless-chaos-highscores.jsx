import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-highscores');
}

export default function RealMapRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-highscores" />;
}
