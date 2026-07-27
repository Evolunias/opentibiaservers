import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-pvpe-server');
}

export default function Archlight96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-pvpe-server" />;
}
