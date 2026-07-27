import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-poland');
}

export default function AmeriaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-poland" />;
}
