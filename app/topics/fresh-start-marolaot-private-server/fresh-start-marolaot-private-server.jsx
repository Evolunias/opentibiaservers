import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-private-server');
}

export default function FreshStartMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-private-server" />;
}
