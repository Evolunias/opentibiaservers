import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-usa');
}

export default function ArchlightPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-usa" />;
}
