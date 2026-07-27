import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-create-account');
}

export default function OldSchoolTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-create-account" />;
}
