import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-europe');
}

export default function CalmeraOtSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-europe" />;
}
