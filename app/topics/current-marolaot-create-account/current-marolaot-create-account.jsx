import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-create-account');
}

export default function CurrentMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-create-account" />;
}
