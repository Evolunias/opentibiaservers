import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-germany');
}

export default function RealMapOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-germany" />;
}
