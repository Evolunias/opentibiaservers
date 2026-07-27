import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-guide');
}

export default function CustomBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-guide" />;
}
