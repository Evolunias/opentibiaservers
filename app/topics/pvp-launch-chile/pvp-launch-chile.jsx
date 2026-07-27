import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-chile');
}

export default function PvpLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-chile" />;
}
