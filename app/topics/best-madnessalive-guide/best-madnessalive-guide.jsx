import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-guide');
}

export default function BestMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-guide" />;
}
