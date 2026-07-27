import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-create-account');
}

export default function OldSchoolMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-create-account" />;
}
