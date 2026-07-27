import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-seasonal-server');
}

export default function Ameria772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-seasonal-server" />;
}
