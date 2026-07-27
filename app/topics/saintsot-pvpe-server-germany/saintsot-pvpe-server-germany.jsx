import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-germany');
}

export default function SaintsotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-germany" />;
}
