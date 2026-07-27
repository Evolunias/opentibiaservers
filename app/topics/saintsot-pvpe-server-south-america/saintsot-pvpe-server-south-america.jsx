import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-south-america');
}

export default function SaintsotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-south-america" />;
}
