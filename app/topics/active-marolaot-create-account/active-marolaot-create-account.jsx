import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-create-account');
}

export default function ActiveMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-create-account" />;
}
