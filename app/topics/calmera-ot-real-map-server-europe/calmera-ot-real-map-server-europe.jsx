import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-europe');
}

export default function CalmeraOtRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-europe" />;
}
