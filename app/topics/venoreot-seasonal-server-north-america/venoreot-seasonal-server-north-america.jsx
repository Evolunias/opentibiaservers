import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-north-america');
}

export default function VenoreotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-north-america" />;
}
