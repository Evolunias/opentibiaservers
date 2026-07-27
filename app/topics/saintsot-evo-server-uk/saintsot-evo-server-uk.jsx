import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-uk');
}

export default function SaintsotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-uk" />;
}
