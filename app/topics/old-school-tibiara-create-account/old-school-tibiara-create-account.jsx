import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-create-account');
}

export default function OldSchoolTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-create-account" />;
}
