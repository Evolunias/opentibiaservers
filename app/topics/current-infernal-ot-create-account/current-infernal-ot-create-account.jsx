import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-create-account');
}

export default function CurrentInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-create-account" />;
}
