import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-server');
}

export default function NoResetMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-server" />;
}
