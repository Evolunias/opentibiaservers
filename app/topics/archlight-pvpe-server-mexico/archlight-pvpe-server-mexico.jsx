import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-mexico');
}

export default function ArchlightPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-mexico" />;
}
