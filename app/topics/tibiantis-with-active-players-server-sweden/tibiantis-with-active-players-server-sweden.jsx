import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-sweden');
}

export default function TibiantisWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-sweden" />;
}
