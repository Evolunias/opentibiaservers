import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-ots');
}

export default function HighrateInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-ots" />;
}
