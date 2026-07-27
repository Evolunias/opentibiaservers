import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-sweden');
}

export default function AlasteraPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-sweden" />;
}
