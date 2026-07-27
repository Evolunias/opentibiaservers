import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-ots');
}

export default function HighrateOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-ots" />;
}
