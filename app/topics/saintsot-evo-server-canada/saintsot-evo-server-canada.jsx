import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-canada');
}

export default function SaintsotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-canada" />;
}
