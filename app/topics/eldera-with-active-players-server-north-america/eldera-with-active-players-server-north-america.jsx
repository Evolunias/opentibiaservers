import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-north-america');
}

export default function ElderaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-north-america" />;
}
