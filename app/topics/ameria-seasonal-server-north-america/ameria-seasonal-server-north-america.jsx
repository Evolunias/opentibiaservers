import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-north-america');
}

export default function AmeriaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-north-america" />;
}
