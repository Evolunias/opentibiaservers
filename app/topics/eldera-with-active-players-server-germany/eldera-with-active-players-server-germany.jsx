import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-germany');
}

export default function ElderaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-germany" />;
}
