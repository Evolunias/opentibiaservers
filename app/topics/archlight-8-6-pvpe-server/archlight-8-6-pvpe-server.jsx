import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-pvpe-server');
}

export default function Archlight86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-pvpe-server" />;
}
