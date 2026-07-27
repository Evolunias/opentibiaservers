import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-guide');
}

export default function ActiveBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-guide" />;
}
