import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-seasonal-server');
}

export default function CalmeraOt11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-seasonal-server" />;
}
