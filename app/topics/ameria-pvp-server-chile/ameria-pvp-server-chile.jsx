import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-chile');
}

export default function AmeriaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-chile" />;
}
