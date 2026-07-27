import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-create-account');
}

export default function OldSchoolKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-create-account" />;
}
