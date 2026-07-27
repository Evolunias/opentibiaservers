import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-create-account');
}

export default function NoResetMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-create-account" />;
}
