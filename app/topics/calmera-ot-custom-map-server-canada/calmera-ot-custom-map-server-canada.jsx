import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-canada');
}

export default function CalmeraOtCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-canada" />;
}
