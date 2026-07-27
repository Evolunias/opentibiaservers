import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-private-server');
}

export default function NoResetMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-private-server" />;
}
