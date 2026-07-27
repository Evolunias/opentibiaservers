import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-guide');
}

export default function NewMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-guide" />;
}
