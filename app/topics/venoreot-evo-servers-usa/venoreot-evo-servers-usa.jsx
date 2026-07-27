import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-servers-usa');
}

export default function VenoreotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-servers-usa" />;
}
