import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-brazil');
}

export default function AmeriaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-brazil" />;
}
