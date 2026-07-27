import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-highscores');
}

export default function RealMapEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-highscores" />;
}
