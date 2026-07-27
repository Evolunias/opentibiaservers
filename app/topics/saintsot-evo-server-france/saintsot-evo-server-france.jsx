import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-france');
}

export default function SaintsotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-france" />;
}
