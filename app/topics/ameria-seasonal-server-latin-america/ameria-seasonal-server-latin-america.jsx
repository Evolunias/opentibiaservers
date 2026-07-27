import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-latin-america');
}

export default function AmeriaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-latin-america" />;
}
