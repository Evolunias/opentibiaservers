import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-create-account');
}

export default function LowrateInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-create-account" />;
}
