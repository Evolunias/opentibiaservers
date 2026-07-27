import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-north-america');
}

export default function CalmeraOtSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-north-america" />;
}
