import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-sweden');
}

export default function VenoreotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-sweden" />;
}
