import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-guide');
}

export default function CustomMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-guide" />;
}
