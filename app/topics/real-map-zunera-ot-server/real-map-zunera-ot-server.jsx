import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-server');
}

export default function RealMapZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-server" />;
}
