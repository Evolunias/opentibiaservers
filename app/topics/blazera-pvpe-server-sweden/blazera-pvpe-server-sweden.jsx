import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-sweden');
}

export default function BlazeraPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-sweden" />;
}
