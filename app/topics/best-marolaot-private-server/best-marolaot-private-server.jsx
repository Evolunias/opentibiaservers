import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-private-server');
}

export default function BestMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-private-server" />;
}
