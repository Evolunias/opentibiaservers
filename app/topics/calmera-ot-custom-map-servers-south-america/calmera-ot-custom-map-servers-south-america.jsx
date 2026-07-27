import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-south-america');
}

export default function CalmeraOtCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-south-america" />;
}
