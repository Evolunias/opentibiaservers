import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-sweden');
}

export default function ThaisotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-sweden" />;
}
