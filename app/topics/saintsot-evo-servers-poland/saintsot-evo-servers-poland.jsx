import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-servers-poland');
}

export default function SaintsotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-servers-poland" />;
}
