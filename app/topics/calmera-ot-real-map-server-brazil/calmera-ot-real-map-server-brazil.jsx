import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-brazil');
}

export default function CalmeraOtRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-brazil" />;
}
