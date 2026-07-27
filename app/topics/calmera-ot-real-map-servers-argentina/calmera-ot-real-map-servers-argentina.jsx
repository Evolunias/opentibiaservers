import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-argentina');
}

export default function CalmeraOtRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-argentina" />;
}
