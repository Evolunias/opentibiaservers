import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-create-account');
}

export default function OfficialMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-create-account" />;
}
