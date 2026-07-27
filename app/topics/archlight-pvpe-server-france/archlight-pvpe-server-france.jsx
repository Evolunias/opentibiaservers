import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-france');
}

export default function ArchlightPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-france" />;
}
