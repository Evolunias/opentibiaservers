import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-south-america');
}

export default function ElderaWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-south-america" />;
}
