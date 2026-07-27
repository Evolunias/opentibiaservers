import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-chile');
}

export default function NoResetLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-chile" />;
}
