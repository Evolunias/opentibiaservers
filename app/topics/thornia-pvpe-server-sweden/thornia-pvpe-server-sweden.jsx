import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-sweden');
}

export default function ThorniaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-sweden" />;
}
