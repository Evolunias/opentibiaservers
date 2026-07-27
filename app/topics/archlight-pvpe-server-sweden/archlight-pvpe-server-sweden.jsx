import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-sweden');
}

export default function ArchlightPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-sweden" />;
}
