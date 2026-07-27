import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-france');
}

export default function ElderaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-france" />;
}
