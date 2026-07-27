import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-create-account');
}

export default function OldSchoolMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-create-account" />;
}
