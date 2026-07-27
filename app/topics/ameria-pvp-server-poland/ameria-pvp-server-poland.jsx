import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-poland');
}

export default function AmeriaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-poland" />;
}
