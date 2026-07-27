import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-north-america');
}

export default function CalmeraOtCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-north-america" />;
}
