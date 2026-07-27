import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-create-account');
}

export default function OldSchoolMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-create-account" />;
}
