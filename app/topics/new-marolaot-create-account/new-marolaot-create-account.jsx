import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-create-account');
}

export default function NewMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-create-account" />;
}
