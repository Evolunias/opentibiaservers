import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-highscores');
}

export default function RealMapMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-highscores" />;
}
