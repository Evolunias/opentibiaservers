import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-create-account');
}

export default function MarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="marolaot-create-account" />;
}
