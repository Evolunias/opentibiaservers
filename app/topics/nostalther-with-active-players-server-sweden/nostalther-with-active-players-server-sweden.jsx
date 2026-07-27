import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-active-players-server-sweden');
}

export default function NostaltherWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-active-players-server-sweden" />;
}
