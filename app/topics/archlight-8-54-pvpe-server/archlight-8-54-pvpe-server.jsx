import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-54-pvpe-server');
}

export default function Archlight854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-54-pvpe-server" />;
}
