import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-ot');
}

export default function HighrateOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-ot" />;
}
