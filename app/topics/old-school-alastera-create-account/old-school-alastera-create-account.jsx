import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-create-account');
}

export default function OldSchoolAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-create-account" />;
}
