import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-guide');
}

export default function FreshStartBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-guide" />;
}
