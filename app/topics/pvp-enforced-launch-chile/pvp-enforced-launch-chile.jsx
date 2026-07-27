import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-chile');
}

export default function PvpEnforcedLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-chile" />;
}
