import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-usa');
}

export default function SaintsotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-usa" />;
}
