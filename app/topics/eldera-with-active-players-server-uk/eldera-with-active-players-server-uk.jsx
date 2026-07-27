import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-uk');
}

export default function ElderaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-uk" />;
}
