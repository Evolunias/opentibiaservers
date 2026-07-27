import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-germany');
}

export default function CalmeraOtCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-germany" />;
}
