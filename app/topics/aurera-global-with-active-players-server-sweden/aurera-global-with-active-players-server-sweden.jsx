import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-sweden');
}

export default function AureraGlobalWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-sweden" />;
}
