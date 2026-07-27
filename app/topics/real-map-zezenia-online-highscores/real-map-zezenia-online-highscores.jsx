import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-highscores');
}

export default function RealMapZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-highscores" />;
}
