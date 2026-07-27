import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-pvpe-server');
}

export default function Archlight15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-pvpe-server" />;
}
