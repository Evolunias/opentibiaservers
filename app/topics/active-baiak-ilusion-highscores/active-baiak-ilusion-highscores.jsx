import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-highscores');
}

export default function ActiveBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-highscores" />;
}
