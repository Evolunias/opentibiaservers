import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-guide');
}

export default function NewSeasonBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-guide" />;
}
