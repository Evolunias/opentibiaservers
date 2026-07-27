import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-brazil');
}

export default function CalmeraOtRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-brazil" />;
}
