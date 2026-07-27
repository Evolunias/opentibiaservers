import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-create-account');
}

export default function InfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-create-account" />;
}
