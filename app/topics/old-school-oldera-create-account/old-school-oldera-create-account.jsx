import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-create-account');
}

export default function OldSchoolOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-create-account" />;
}
