import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-create-account');
}

export default function CustomMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-create-account" />;
}
