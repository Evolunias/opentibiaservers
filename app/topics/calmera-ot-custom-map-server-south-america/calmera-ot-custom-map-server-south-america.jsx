import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-south-america');
}

export default function CalmeraOtCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-south-america" />;
}
