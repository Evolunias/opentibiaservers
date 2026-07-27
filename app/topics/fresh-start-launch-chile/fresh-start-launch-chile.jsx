import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-chile');
}

export default function FreshStartLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-chile" />;
}
