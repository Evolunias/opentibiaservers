import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-sweden');
}

export default function TibijkaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-sweden" />;
}
