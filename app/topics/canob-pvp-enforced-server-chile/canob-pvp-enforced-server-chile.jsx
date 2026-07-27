import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-chile');
}

export default function CanobPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-chile" />;
}
