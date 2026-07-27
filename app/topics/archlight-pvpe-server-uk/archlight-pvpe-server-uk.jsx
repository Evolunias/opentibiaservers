import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-uk');
}

export default function ArchlightPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-uk" />;
}
