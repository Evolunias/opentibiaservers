import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-sweden');
}

export default function RealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-sweden" />;
}
