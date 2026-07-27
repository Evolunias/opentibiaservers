import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-south-america');
}

export default function SaintsotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-south-america" />;
}
