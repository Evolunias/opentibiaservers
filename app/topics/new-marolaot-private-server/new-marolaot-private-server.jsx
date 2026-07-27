import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-private-server');
}

export default function NewMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-private-server" />;
}
