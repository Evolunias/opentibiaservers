import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-create-account');
}

export default function OldSchoolAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-create-account" />;
}
