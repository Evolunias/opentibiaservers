import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-guide');
}

export default function HighrateBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-guide" />;
}
