import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-poland');
}

export default function VenoreotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-poland" />;
}
