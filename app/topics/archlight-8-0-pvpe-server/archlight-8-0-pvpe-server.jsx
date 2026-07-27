import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-pvpe-server');
}

export default function Archlight80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-pvpe-server" />;
}
