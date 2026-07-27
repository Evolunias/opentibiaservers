import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-sweden');
}

export default function TibiaraPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-sweden" />;
}
