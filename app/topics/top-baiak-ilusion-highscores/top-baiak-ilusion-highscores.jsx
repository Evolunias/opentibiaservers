import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-highscores');
}

export default function TopBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-highscores" />;
}
