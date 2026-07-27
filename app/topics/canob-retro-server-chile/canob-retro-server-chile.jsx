import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-chile');
}

export default function CanobRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-chile" />;
}
