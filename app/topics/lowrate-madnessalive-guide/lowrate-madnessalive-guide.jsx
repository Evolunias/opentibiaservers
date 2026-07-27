import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-guide');
}

export default function LowrateMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-guide" />;
}
