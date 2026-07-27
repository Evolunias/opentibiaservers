import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-europe');
}

export default function CalmeraOtRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-europe" />;
}
