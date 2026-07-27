import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-canada');
}

export default function CalmeraOtCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-canada" />;
}
