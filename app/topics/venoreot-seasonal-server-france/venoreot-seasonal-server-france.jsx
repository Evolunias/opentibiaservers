import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-france');
}

export default function VenoreotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-france" />;
}
