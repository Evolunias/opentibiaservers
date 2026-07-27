import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-servers-poland');
}

export default function AmeriaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-servers-poland" />;
}
