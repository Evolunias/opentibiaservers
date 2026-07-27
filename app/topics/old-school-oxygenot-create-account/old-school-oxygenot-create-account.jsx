import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-create-account');
}

export default function OldSchoolOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-create-account" />;
}
