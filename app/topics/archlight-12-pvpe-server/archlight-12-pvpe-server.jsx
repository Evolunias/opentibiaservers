import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-pvpe-server');
}

export default function Archlight12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-pvpe-server" />;
}
