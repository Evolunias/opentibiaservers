import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-create-account');
}

export default function OldSchoolOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-create-account" />;
}
