import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-create-account');
}

export default function FreshStartMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-create-account" />;
}
