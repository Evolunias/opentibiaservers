import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-chile');
}

export default function LowExpLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-chile" />;
}
