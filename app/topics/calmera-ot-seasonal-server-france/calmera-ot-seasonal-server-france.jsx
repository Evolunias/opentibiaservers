import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-france');
}

export default function CalmeraOtSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-france" />;
}
