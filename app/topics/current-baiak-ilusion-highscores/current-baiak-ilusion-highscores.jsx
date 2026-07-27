import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-highscores');
}

export default function CurrentBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-highscores" />;
}
