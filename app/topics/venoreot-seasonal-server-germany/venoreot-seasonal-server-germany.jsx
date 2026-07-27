import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-germany');
}

export default function VenoreotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-germany" />;
}
