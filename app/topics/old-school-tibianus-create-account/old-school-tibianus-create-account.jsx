import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-create-account');
}

export default function OldSchoolTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-create-account" />;
}
