import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-germany');
}

export default function AmeriaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-germany" />;
}
