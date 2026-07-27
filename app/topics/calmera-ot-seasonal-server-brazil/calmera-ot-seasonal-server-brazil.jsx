import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-brazil');
}

export default function CalmeraOtSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-brazil" />;
}
