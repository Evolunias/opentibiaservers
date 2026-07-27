import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-usa');
}

export default function AmeriaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-usa" />;
}
