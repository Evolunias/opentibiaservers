import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-france');
}

export default function AmeriaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-france" />;
}
