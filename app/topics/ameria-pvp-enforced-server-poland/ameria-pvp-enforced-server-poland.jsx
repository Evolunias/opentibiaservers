import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-poland');
}

export default function AmeriaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-poland" />;
}
