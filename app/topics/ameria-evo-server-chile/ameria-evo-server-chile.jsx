import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-chile');
}

export default function AmeriaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-chile" />;
}
