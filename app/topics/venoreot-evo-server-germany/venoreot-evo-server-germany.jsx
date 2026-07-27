import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-germany');
}

export default function VenoreotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-germany" />;
}
