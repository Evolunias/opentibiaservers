import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-seasonal-server');
}

export default function Venoreot86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-seasonal-server" />;
}
