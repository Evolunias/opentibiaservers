import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-chile');
}

export default function ThaisotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-chile" />;
}
