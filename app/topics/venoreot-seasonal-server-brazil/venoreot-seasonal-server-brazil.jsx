import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-brazil');
}

export default function VenoreotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-brazil" />;
}
