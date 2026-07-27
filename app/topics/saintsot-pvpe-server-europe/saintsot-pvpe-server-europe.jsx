import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-europe');
}

export default function SaintsotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-europe" />;
}
