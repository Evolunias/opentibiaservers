import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-sweden');
}

export default function RealeraWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-sweden" />;
}
