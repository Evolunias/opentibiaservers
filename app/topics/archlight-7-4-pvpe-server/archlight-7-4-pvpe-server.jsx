import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-pvpe-server');
}

export default function Archlight74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-pvpe-server" />;
}
