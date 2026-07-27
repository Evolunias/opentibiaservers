import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-guide');
}

export default function BaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-guide" />;
}
