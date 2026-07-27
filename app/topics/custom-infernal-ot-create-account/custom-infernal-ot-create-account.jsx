import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-create-account');
}

export default function CustomInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-create-account" />;
}
