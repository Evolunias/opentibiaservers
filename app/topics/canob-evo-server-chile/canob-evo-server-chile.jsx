import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-chile');
}

export default function CanobEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-chile" />;
}
