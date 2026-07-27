import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-highscores');
}

export default function FreshStartBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-highscores" />;
}
