import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-highscores');
}

export default function RealMapArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-highscores" />;
}
