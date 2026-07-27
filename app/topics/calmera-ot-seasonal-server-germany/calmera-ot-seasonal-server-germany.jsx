import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-germany');
}

export default function CalmeraOtSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-germany" />;
}
