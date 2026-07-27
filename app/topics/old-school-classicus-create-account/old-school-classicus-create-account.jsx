import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-create-account');
}

export default function OldSchoolClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-create-account" />;
}
