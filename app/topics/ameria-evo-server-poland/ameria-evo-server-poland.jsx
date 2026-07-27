import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-poland');
}

export default function AmeriaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-poland" />;
}
