import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-argentina');
}

export default function VenoreotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-argentina" />;
}
