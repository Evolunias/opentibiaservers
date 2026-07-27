import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-private-server');
}

export default function CurrentMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-private-server" />;
}
