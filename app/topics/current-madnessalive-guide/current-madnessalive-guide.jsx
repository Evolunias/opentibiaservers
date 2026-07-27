import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-guide');
}

export default function CurrentMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-guide" />;
}
