import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-germany');
}

export default function CalmeraOtRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-germany" />;
}
