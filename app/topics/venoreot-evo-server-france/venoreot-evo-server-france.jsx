import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-france');
}

export default function VenoreotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-france" />;
}
