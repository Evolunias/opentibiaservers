import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-canada');
}

export default function VenoreotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-canada" />;
}
