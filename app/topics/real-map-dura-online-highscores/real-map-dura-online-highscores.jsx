import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-highscores');
}

export default function RealMapDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-highscores" />;
}
