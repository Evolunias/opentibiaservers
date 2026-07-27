import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-pvpe-server');
}

export default function Archlight84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-pvpe-server" />;
}
