import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-mexico');
}

export default function SaintsotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-mexico" />;
}
