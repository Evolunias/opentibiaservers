import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-sweden');
}

export default function RealMapOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-sweden" />;
}
