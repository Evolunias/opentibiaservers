import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-argentina');
}

export default function SaintsotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-argentina" />;
}
