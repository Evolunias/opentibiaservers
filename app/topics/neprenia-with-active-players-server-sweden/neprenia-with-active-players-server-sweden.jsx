import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-sweden');
}

export default function NepreniaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-sweden" />;
}
