import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-usa');
}

export default function VenoreotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-usa" />;
}
