import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-uk');
}

export default function AmeriaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-uk" />;
}
