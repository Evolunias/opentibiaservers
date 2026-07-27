import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-europe');
}

export default function VenoreotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-europe" />;
}
