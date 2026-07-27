import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-mexico');
}

export default function AmeriaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-mexico" />;
}
