import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-chile');
}

export default function CanobPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-chile" />;
}
