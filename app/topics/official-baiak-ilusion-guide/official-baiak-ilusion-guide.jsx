import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-guide');
}

export default function OfficialBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-guide" />;
}
