import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-client');
}

export default function RealMapZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-client" />;
}
