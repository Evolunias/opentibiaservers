import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-seasonal-server');
}

export default function Ameria13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-seasonal-server" />;
}
