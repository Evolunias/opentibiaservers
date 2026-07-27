import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-chile');
}

export default function CarlinotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-chile" />;
}
