import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-latin-america');
}

export default function ElderaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-latin-america" />;
}
