import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-guide');
}

export default function HighrateOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-guide" />;
}
