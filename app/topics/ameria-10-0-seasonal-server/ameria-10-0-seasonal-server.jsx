import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-seasonal-server');
}

export default function Ameria100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-seasonal-server" />;
}
