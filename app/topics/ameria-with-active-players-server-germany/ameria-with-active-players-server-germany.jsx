import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-germany');
}

export default function AmeriaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-germany" />;
}
