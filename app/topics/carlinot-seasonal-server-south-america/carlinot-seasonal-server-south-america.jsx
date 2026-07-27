import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-south-america');
}

export default function CarlinotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-south-america" />;
}
