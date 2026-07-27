import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-sweden');
}

export default function NilotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-sweden" />;
}
