import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-create-account');
}

export default function OldSchoolInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-create-account" />;
}
