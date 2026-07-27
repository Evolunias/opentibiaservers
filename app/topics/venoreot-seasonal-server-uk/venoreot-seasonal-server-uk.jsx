import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-uk');
}

export default function VenoreotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-uk" />;
}
