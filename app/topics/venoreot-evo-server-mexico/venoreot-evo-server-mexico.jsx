import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-mexico');
}

export default function VenoreotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-mexico" />;
}
