import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-client');
}

export default function HighrateInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-client" />;
}
