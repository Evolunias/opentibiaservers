import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-usa');
}

export default function SaintsotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-usa" />;
}
