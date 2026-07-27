import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-latin-america');
}

export default function SaintsotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-latin-america" />;
}
