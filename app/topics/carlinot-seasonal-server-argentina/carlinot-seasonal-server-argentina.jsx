import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-argentina');
}

export default function CarlinotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-argentina" />;
}
