import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-latin-america');
}

export default function SaintsotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-latin-america" />;
}
