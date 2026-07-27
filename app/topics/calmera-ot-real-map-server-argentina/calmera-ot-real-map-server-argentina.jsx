import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-argentina');
}

export default function CalmeraOtRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-argentina" />;
}
