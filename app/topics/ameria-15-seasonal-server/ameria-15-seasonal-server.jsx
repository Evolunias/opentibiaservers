import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-seasonal-server');
}

export default function Ameria15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-seasonal-server" />;
}
