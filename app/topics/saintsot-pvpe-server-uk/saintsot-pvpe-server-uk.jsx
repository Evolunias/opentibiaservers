import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-uk');
}

export default function SaintsotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-uk" />;
}
