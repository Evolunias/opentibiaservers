import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-chile');
}

export default function CanobHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-chile" />;
}
