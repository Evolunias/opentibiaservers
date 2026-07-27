import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-sweden');
}

export default function ThorniaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-sweden" />;
}
