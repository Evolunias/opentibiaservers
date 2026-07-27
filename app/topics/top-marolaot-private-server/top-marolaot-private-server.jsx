import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-private-server');
}

export default function TopMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-private-server" />;
}
