import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-active-players-server-sweden');
}

export default function MadnessaliveWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-active-players-server-sweden" />;
}
