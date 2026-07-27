import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-guide');
}

export default function HighrateInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-guide" />;
}
