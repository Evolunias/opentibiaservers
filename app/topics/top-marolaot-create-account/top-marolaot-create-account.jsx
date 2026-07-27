import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-create-account');
}

export default function TopMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-create-account" />;
}
