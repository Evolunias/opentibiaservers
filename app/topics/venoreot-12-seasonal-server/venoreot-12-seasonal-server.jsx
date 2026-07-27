import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-seasonal-server');
}

export default function Venoreot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-seasonal-server" />;
}
