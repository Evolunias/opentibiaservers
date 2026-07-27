import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-canada');
}

export default function AmeriaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-canada" />;
}
