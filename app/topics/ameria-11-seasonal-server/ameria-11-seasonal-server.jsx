import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-seasonal-server');
}

export default function Ameria11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-seasonal-server" />;
}
