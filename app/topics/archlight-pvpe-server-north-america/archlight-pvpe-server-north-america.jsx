import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-north-america');
}

export default function ArchlightPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-north-america" />;
}
