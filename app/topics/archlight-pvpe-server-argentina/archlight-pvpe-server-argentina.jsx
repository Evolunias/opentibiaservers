import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-argentina');
}

export default function ArchlightPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-argentina" />;
}
