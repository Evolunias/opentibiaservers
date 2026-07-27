import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-europe');
}

export default function AmeriaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-europe" />;
}
