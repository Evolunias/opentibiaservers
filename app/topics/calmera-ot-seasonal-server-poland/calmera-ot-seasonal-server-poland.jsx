import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-poland');
}

export default function CalmeraOtSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-poland" />;
}
