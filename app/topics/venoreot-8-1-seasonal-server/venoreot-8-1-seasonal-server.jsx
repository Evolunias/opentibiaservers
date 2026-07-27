import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-seasonal-server');
}

export default function Venoreot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-seasonal-server" />;
}
