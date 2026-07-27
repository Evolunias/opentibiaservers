import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-create-account');
}

export default function OldSchoolSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-create-account" />;
}
