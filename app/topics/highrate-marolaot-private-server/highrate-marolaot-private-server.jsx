import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-private-server');
}

export default function HighrateMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-private-server" />;
}
