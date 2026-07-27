import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-private-server');
}

export default function ActiveMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-private-server" />;
}
