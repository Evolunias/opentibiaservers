import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-create-account');
}

export default function OldSchoolHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-create-account" />;
}
