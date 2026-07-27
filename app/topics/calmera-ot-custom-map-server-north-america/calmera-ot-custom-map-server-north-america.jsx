import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-north-america');
}

export default function CalmeraOtCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-north-america" />;
}
