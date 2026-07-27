import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-create-account');
}

export default function OldSchoolRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-create-account" />;
}
