import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-sweden');
}

export default function OlderaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-sweden" />;
}
