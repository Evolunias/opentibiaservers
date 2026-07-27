import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-canada');
}

export default function CalmeraOtRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-canada" />;
}
