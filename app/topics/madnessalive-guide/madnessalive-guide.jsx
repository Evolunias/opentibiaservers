import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-guide');
}

export default function MadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-guide" />;
}
