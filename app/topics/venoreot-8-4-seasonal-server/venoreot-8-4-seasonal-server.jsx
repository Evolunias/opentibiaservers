import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-seasonal-server');
}

export default function Venoreot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-seasonal-server" />;
}
