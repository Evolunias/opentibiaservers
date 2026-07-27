import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-chile');
}

export default function PvpeLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-chile" />;
}
