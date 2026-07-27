import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-pvpe-server');
}

export default function Archlight81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-pvpe-server" />;
}
