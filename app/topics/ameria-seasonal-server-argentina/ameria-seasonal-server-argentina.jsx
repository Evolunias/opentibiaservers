import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-argentina');
}

export default function AmeriaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-argentina" />;
}
