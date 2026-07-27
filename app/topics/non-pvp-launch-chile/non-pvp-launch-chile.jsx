import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-chile');
}

export default function NonPvpLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-chile" />;
}
