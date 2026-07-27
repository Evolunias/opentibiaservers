import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-server-sweden');
}

export default function SaintsotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-server-sweden" />;
}
