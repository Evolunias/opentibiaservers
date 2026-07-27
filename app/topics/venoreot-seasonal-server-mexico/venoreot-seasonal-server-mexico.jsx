import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-mexico');
}

export default function VenoreotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-mexico" />;
}
