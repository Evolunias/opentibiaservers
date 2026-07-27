import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-south-america');
}

export default function CalmeraOtRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-south-america" />;
}
