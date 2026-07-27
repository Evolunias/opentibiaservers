import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-mexico');
}

export default function CalmeraOtRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-mexico" />;
}
