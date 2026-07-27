import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-france');
}

export default function SaintsotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-france" />;
}
