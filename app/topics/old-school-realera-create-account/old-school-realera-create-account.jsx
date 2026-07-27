import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-create-account');
}

export default function OldSchoolRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-create-account" />;
}
