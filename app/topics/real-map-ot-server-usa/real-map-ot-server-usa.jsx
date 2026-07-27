import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-usa');
}

export default function RealMapOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-usa" />;
}
