import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-europe');
}

export default function AmeriaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-europe" />;
}
