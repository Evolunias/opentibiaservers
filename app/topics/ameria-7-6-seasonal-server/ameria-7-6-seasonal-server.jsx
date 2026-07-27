import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-seasonal-server');
}

export default function Ameria76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-seasonal-server" />;
}
