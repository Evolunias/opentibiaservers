import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-uk');
}

export default function CalmeraOtRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-uk" />;
}
