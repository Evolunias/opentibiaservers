import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-chile');
}

export default function EvoLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-chile" />;
}
