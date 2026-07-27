import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-usa');
}

export default function CalmeraOtRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-usa" />;
}
