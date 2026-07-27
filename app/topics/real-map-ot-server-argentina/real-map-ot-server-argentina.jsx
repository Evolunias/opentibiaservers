import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-argentina');
}

export default function RealMapOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-argentina" />;
}
