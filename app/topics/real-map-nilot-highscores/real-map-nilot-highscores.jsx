import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-highscores');
}

export default function RealMapNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-highscores" />;
}
