import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-europe');
}

export default function ArchlightPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-europe" />;
}
