import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-sweden');
}

export default function VenoreotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-sweden" />;
}
