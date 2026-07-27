import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-sweden');
}

export default function VenoreotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-sweden" />;
}
