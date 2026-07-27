import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-evo-servers-usa');
}

export default function SaintsotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-evo-servers-usa" />;
}
