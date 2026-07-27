import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-argentina');
}

export default function SaintsotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-argentina" />;
}
