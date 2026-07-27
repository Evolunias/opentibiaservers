import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-chile');
}

export default function HighExpLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-chile" />;
}
