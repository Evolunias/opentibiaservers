import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-highscores');
}

export default function BestBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-highscores" />;
}
