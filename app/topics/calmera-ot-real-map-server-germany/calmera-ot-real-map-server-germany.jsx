import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-germany');
}

export default function CalmeraOtRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-germany" />;
}
