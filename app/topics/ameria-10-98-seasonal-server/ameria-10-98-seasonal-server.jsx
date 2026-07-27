import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-seasonal-server');
}

export default function Ameria1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-seasonal-server" />;
}
