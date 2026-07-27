import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-highscores');
}

export default function RealMapNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-highscores" />;
}
