import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-south-america');
}

export default function ArchlightPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-south-america" />;
}
