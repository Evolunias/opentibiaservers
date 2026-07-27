import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-highscores');
}

export default function RealMapBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-highscores" />;
}
