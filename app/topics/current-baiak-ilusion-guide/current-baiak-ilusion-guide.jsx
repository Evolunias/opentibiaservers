import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-guide');
}

export default function CurrentBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-guide" />;
}
