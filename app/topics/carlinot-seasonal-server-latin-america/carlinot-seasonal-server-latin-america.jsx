import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-latin-america');
}

export default function CarlinotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-latin-america" />;
}
