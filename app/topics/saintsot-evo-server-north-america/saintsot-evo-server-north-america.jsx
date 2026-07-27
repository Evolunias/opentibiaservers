import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-north-america');
}

export default function SaintsotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-north-america" />;
}
