import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-sweden');
}

export default function LumineraWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-sweden" />;
}
