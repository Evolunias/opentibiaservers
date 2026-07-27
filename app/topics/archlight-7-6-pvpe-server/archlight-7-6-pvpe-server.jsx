import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-pvpe-server');
}

export default function Archlight76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-pvpe-server" />;
}
