import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-guide');
}

export default function HighrateMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-guide" />;
}
