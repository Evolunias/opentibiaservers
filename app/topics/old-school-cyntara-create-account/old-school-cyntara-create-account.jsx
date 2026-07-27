import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-create-account');
}

export default function OldSchoolCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-create-account" />;
}
