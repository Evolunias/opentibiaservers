import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-sweden');
}

export default function KasteriaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-sweden" />;
}
