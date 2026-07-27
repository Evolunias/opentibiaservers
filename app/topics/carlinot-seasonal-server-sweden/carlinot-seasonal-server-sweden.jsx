import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-sweden');
}

export default function CarlinotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-sweden" />;
}
