import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-seasonal-server');
}

export default function Ameria84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-seasonal-server" />;
}
