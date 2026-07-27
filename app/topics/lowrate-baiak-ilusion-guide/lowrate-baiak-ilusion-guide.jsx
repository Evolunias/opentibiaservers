import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-guide');
}

export default function LowrateBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-guide" />;
}
