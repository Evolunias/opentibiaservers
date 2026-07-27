import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-sweden');
}

export default function RealMapClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-sweden" />;
}
