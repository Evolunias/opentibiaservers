import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-usa');
}

export default function ElderaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-usa" />;
}
