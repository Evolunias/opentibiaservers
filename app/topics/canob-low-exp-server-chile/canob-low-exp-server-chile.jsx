import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-chile');
}

export default function CanobLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-chile" />;
}
