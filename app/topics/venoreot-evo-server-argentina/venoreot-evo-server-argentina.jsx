import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-argentina');
}

export default function VenoreotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-argentina" />;
}
