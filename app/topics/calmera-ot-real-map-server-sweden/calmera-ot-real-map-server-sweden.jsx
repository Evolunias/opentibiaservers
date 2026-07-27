import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-sweden');
}

export default function CalmeraOtRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-sweden" />;
}
