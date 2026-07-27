import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-sweden');
}

export default function OriginaltibiaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-sweden" />;
}
