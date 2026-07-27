import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-germany');
}

export default function SaintsotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-germany" />;
}
