import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-guide');
}

export default function TopMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-guide" />;
}
