import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-highscores');
}

export default function NewSeasonBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-highscores" />;
}
