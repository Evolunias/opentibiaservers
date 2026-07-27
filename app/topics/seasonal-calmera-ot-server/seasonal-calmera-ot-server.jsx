import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-calmera-ot-server');
}

export default function SeasonalCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-calmera-ot-server" />;
}
