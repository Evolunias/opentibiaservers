import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-ot');
}

export default function HighrateInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-ot" />;
}
