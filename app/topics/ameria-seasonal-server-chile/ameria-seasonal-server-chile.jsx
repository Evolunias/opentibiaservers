import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-chile');
}

export default function AmeriaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-chile" />;
}
