import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-poland');
}

export default function AmeriaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-poland" />;
}
