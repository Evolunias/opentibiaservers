import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-sweden');
}

export default function TibiascapeWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-sweden" />;
}
