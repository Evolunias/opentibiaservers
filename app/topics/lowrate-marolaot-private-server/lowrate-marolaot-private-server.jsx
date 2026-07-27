import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-private-server');
}

export default function LowrateMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-private-server" />;
}
