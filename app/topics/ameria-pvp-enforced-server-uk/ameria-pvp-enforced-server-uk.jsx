import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-uk');
}

export default function AmeriaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-uk" />;
}
