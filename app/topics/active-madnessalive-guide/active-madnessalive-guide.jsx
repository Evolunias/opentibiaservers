import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-guide');
}

export default function ActiveMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-guide" />;
}
