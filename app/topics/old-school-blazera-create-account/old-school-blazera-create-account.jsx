import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-create-account');
}

export default function OldSchoolBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-create-account" />;
}
