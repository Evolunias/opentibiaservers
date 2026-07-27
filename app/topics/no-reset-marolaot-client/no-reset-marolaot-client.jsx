import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-client');
}

export default function NoResetMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-client" />;
}
