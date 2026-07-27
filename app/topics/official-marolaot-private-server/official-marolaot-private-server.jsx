import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-private-server');
}

export default function OfficialMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-private-server" />;
}
