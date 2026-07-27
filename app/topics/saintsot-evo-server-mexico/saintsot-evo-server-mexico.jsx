import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-mexico');
}

export default function SaintsotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-mexico" />;
}
