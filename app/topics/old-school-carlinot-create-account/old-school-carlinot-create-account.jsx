import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-create-account');
}

export default function OldSchoolCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-create-account" />;
}
