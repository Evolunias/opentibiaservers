import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-sweden');
}

export default function OlderaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-sweden" />;
}
