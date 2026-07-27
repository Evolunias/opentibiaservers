import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-seasonal-server');
}

export default function Venoreot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-seasonal-server" />;
}
