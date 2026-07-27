import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-servers-brazil');
}

export default function SaintsotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-servers-brazil" />;
}
