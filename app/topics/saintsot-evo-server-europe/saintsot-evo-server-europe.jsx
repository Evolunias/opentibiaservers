import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-europe');
}

export default function SaintsotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-europe" />;
}
