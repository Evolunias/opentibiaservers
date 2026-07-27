import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-north-america');
}

export default function CalmeraOtRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-north-america" />;
}
