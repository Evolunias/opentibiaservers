import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-chile');
}

export default function AmeriaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-chile" />;
}
