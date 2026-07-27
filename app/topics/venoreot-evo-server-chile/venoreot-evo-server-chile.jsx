import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-chile');
}

export default function VenoreotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-chile" />;
}
