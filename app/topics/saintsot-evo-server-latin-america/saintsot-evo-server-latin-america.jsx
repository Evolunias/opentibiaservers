import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-latin-america');
}

export default function SaintsotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-latin-america" />;
}
