import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-create-account');
}

export default function OldSchoolYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-create-account" />;
}
