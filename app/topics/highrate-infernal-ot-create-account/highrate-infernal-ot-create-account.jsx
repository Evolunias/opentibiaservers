import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-create-account');
}

export default function HighrateInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-create-account" />;
}
