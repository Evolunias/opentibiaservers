import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-seasonal-server');
}

export default function Venoreot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-seasonal-server" />;
}
