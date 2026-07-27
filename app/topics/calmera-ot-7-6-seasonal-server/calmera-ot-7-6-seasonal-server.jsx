import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-seasonal-server');
}

export default function CalmeraOt76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-seasonal-server" />;
}
