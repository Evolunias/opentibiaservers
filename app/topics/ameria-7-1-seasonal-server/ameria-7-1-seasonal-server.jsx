import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-seasonal-server');
}

export default function Ameria71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-seasonal-server" />;
}
