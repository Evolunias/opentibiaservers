import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-poland');
}

export default function ArchlightPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-poland" />;
}
