import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-brazil');
}

export default function ArchlightPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-brazil" />;
}
