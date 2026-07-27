import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-brazil');
}

export default function SaintsotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-brazil" />;
}
