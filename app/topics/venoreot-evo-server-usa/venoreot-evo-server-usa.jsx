import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-usa');
}

export default function VenoreotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-usa" />;
}
