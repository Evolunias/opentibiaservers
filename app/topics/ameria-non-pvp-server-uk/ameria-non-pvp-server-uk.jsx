import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-uk');
}

export default function AmeriaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-uk" />;
}
