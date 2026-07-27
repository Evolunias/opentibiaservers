import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-create-account');
}

export default function OldSchoolEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-create-account" />;
}
