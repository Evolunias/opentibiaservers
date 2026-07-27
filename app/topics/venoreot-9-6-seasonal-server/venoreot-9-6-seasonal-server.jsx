import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-seasonal-server');
}

export default function Venoreot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-seasonal-server" />;
}
