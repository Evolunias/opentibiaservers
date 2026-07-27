import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-ot');
}

export default function RealMapThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-ot" />;
}
