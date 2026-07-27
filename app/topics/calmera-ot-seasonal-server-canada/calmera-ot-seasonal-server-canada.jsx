import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-canada');
}

export default function CalmeraOtSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-canada" />;
}
