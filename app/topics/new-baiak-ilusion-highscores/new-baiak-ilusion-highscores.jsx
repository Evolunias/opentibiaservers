import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-highscores');
}

export default function NewBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-highscores" />;
}
