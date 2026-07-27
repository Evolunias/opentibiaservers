import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-create-account');
}

export default function OldSchoolNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-create-account" />;
}
