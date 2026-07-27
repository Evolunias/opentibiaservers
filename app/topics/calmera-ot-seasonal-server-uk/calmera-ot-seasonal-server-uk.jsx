import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-uk');
}

export default function CalmeraOtSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-uk" />;
}
