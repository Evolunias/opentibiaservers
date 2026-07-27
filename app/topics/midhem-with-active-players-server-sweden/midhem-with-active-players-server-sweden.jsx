import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-sweden');
}

export default function MidhemWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-sweden" />;
}
