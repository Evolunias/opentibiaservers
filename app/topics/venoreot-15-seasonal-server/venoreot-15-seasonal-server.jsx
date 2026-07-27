import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-seasonal-server');
}

export default function Venoreot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-seasonal-server" />;
}
