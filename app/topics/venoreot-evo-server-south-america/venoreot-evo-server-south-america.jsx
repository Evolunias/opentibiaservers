import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-south-america');
}

export default function VenoreotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-south-america" />;
}
