import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-sweden');
}

export default function TibiamePvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-sweden" />;
}
