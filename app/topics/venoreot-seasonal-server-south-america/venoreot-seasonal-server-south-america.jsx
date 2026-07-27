import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-south-america');
}

export default function VenoreotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-south-america" />;
}
