import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-germany');
}

export default function AmeriaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-germany" />;
}
