import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-private-server');
}

export default function MarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-private-server" />;
}
