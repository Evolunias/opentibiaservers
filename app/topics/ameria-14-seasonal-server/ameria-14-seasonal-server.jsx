import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-seasonal-server');
}

export default function Ameria14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-seasonal-server" />;
}
