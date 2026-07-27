import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-highscores');
}

export default function RealMapOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-highscores" />;
}
