import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-guide');
}

export default function NewBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-guide" />;
}
