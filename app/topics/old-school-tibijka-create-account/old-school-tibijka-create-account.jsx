import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-create-account');
}

export default function OldSchoolTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-create-account" />;
}
