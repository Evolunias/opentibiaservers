import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-active-players-server-sweden');
}

export default function RookgaardTalesWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-active-players-server-sweden" />;
}
