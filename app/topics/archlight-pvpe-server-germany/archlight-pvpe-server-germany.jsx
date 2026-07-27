import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-germany');
}

export default function ArchlightPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-germany" />;
}
