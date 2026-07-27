import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-canada');
}

export default function SaintsotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-canada" />;
}
