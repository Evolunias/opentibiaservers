import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-create-account');
}

export default function OldSchoolUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-create-account" />;
}
