import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-seasonal-server');
}

export default function Ameria12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-seasonal-server" />;
}
