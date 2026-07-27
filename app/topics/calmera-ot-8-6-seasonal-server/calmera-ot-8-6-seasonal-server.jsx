import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-6-seasonal-server');
}

export default function CalmeraOt86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-6-seasonal-server" />;
}
