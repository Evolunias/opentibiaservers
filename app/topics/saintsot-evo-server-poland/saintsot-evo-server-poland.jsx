import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-poland');
}

export default function SaintsotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-poland" />;
}
