import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-seasonal-server');
}

export default function Venoreot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-seasonal-server" />;
}
