import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-client');
}

export default function RealMapCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-client" />;
}
