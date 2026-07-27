import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-highscores');
}

export default function CustomBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-highscores" />;
}
