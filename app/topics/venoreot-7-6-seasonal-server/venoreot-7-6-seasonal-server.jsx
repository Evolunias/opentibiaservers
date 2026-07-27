import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-seasonal-server');
}

export default function Venoreot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-seasonal-server" />;
}
