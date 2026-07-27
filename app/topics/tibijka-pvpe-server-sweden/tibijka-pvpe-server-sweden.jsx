import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-sweden');
}

export default function TibijkaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-sweden" />;
}
