import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-guide');
}

export default function NoResetBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-guide" />;
}
