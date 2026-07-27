import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness');
}

export default function HighrateOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness" />;
}
