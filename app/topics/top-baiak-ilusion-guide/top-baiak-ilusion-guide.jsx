import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-guide');
}

export default function TopBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-guide" />;
}
