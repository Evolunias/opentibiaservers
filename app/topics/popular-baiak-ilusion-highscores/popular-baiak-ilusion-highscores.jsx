import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-highscores');
}

export default function PopularBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-highscores" />;
}
