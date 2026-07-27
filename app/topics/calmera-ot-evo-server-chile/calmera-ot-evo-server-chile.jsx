import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-chile');
}

export default function CalmeraOtEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-chile" />;
}
