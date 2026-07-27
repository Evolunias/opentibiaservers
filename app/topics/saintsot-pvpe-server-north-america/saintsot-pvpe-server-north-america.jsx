import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-north-america');
}

export default function SaintsotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-north-america" />;
}
