import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-latin-america');
}

export default function SaintsotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-latin-america" />;
}
