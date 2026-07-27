import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-canada');
}

export default function ElderaWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-canada" />;
}
