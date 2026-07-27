import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-canada');
}

export default function ArchlightPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-canada" />;
}
