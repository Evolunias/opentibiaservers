import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-poland');
}

export default function CalmeraOtRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-poland" />;
}
