import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-poland');
}

export default function SaintsotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-poland" />;
}
