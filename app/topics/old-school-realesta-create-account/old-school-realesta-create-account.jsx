import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-create-account');
}

export default function OldSchoolRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-create-account" />;
}
