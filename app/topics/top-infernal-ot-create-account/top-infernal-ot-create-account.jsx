import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-create-account');
}

export default function TopInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-create-account" />;
}
