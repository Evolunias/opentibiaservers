import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-create-account');
}

export default function NewInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-create-account" />;
}
