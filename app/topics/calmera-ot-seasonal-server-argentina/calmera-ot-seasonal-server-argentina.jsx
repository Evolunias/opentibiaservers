import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-argentina');
}

export default function CalmeraOtSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-argentina" />;
}
