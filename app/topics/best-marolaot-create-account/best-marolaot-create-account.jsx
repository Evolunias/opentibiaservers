import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-create-account');
}

export default function BestMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-create-account" />;
}
