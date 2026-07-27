import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-latin-america');
}

export default function ArchlightPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-latin-america" />;
}
