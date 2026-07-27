import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-germany');
}

export default function CalmeraOtCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-germany" />;
}
