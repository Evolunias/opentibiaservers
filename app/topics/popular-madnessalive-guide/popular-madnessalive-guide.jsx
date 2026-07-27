import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-guide');
}

export default function PopularMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-guide" />;
}
