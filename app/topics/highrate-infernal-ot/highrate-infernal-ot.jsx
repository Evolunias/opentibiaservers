import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot');
}

export default function HighrateInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot" />;
}
