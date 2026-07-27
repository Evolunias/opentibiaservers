import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-guide');
}

export default function BestBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-guide" />;
}
