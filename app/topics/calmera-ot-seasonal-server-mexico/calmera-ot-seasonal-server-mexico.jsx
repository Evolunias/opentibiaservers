import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-mexico');
}

export default function CalmeraOtSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-mexico" />;
}
